<?php
    include "../includes/preReq.php";
    if($_SERVER['REQUEST_METHOD'] == "PUT"){
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE comment_table SET likes = :likes WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $newlike = $user->likes + $user->flag;
        $stmt->bindParam(':likes', $newlike);
        $stmt->bindParam(':id', $user->id);
    
        if($stmt->execute()){
            $response = ['status' => 1 ];
        }else{
            $response = ['status' => 0 ];
        }
    
        echo json_encode($response);
    }
?>