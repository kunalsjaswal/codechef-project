<?php
    include '../includes/preReq.php';
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $user = json_decode(file_get_contents('php://input'));
    
        $sql = "INSERT INTO comment_table (post_id, user_id, user_name, comment, level, ref_id, root_id) 
        VALUES (:post_id ,:user_id, :user_name, :comment, :level, :ref_id, :root_id)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':post_id', $user->post_id);
        $stmt->bindParam(':user_id', $user->user_id);
        $stmt->bindParam(':user_name', $user->user_name);
        $stmt->bindParam(':comment', $user->comment);
        $stmt->bindParam(':level', $user->level);
        $stmt->bindParam(':ref_id', $user->ref_id);
        $stmt->bindParam(':root_id', $user->root_id);
    
        if($stmt->execute()){
            $sql = "SELECT replies, total_replies FROM comment_table WHERE id = :root_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':root_id', $user->root_id);
            $stmt->execute();
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $sql = "UPDATE comment_table SET replies = :replies, total_replies = :total_replies WHERE id = :ref_id";
            $stmt = $conn->prepare($sql);
            $replies = $user->replies+1;
            $total_replies = $user->total_replies + 1;
            $stmt->bindParam(':replies', $replies);
            $stmt->bindParam(':total_replies', $total_replies);
            $stmt->bindParam(':ref_id', $user->ref_id);
            $stmt->execute();
            
            if($user->level > 1){
                $sql = "UPDATE comment_table SET total_replies  = :total_replies WHERE id = :root_id";
                $stmt = $conn->prepare($sql);
                $total_replies = (int)$data['total_replies'] + 1;
                $stmt->bindParam(':total_replies', $total_replies);
                $stmt->bindParam(':root_id', $user->root_id);
                $stmt->execute();
            }
            
            $response = ['status' => 1, 'message' => 'message posted'];
        }
        else{
            $response = ['status' => 0, 'message' => 'error in posting message'];
        }
    
        echo json_encode($response);
    }
?>
