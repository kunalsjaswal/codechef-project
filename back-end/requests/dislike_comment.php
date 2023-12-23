<?php
    include "../includes/preReq.php";

    if($_SERVER['REQUEST_METHOD'] == "PUT"){
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE comment_table SET dislikes = :dislikes WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $dislikes  = $user->dislikes + $user->flag; // for undo dislike-> flag = -1
        $stmt->bindParam(':dislikes', $dislikes);
        $stmt->bindParam(':id', $user->id);
    
        if($stmt->execute()){
            $response = ['status' => 1 ];
        }else{
            $response = ['status' => 0 ];
        }
    
        echo json_encode($response);
    }
?>