<?php
    include '../includes/preReq.php';

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $user = json_decode(file_get_contents('php://input'));
        $sql = "SELECT id, name, email FROM users WHERE email = :email AND password = :password";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':password', $user->password);
        $stmt->execute();
    
        if($stmt->rowCount() > 0){
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            $response = ['status' => 1, 'message' => 'Logged in Succefully', 'content'=> $data];
        }
        else{
            $response = ['status' => 0, 'message' => 'Invalid Credentials'];
        }
        echo json_encode($response);
    }

?>