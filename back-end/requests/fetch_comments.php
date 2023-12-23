<?php
    include '../includes/preReq.php';
    if($_SERVER['REQUEST_METHOD'] == "GET"){
        $sql = "SELECT * FROM comment_table";
        $stmt = $conn->prepare($sql);
        if($stmt->execute()){
            if($stmt->rowCount() > 0){
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $response = ['status' => 1, 'content' => $data];
            }
            else{
                $response = ['status' => 1, 'content' => []];
            }
    
        }else{
            $response = ['status' => 0];
        }
    
        echo json_encode($response);
    }

?>