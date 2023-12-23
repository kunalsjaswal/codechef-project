<?php
    include '../includes/preReq.php';

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $user = json_decode(file_get_contents('php://input'));
    
        $sql = "INSERT INTO comment_table (post_id, user_id, user_name, comment, level, ref_id, root_id) 
        VALUES (:post_id ,:user_id, :user_name, :comment, :level, :ref_id, :root_id )";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':post_id', $user->post_id);
        $stmt->bindParam(':user_id', $user->user_id);
        $stmt->bindParam(':user_name', $user->user_name);
        $stmt->bindParam(':comment', $user->comment);
        $stmt->bindParam(':level', $user->level);
        $stmt->bindParam(':ref_id', $user->ref_id);
        $root_id = -1;
        $stmt->bindParam(':root_id', $root_id);
    
        if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'message posted'];
        }
        else{
            $response = ['status' => 0, 'message' => 'error in posting message'];
        }
    
        echo json_encode($response);
    }
?>
