<?php
    include '../includes/preReq.php';
    if($_SERVER['REQUEST_METHOD'] == "PUT"){
        $user = json_decode(file_get_contents('php://input'));
    
        $sql = "UPDATE comment_table SET comment = :comment WHERE id= :id";
    
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':comment', $user->comment);
        $stmt->bindParam(':id', $user->id);
    
        if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'comment updated'];
        }
        else{
            $response = ['status' => 0, 'message' => 'error in updating comment'];
        }
    
        echo json_encode($response);
    }

?>