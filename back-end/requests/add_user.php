<?php
    include '../includes/preReq.php';
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $user = json_decode(file_get_contents('php://input')); // used to get body from json->assoc_array form or to read json format file
        
        // if already exist 
        $sql = "SELECT * FROM users WHERE email = :email";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $user->email);
        $stmt->execute();
    
        if($stmt->rowCount() > 0){
            $response = ['status' => 0, 'message' => 'User already exist. Please use another email.'];
        }
        else{
            $sql = "INSERT INTO users(id, name, email, password) VALUES(null, :name, :email, :password)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', $user->password);
        
            if($stmt->execute()){
                $response = ['status' => 1, 'message' => 'Account created successfully'];
            }
            else{
                $response = ['status' => 0, 'message' => 'Server error.'];
            }
        }
    
        echo json_encode($response);
    }

?>