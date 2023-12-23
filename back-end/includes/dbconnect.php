<?php
    $user = 'root';
    $pass = 'Kunal123@';
    $dbname = 'codechef1';
    $server = 'localhost';

    try {
        $conn = new PDO('mysql:host='.$server . ';dbname=' . $dbname, $user, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $sql = "CREATE TABLE IF NOT EXISTS users (
                    id int PRIMARY KEY auto_increment, 
                    name VARCHAR(50), 
                    email VARCHAR(50), 
                    password VARCHAR(50)
                )";
        $conn->query($sql);

        $sql = "CREATE TABLE IF NOT EXISTS comment_table(
                    id int PRIMARY KEY auto_increment,
                    post_id int,
                    user_id int,
                    user_name VARCHAR(50),
                    comment VARCHAR(150),
                    likes int DEFAULT 0,
                    dislikes int DEFAULT 0,
                    replies int DEFAULT 0,
                    total_replies int DEFAULT 0,
                    level int,
                    ref_id int,
                    root_id int,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    status int DEFAULT 1
                )";
        $conn->query($sql);
    } catch (\Exception $e) {
        echo "Database Error: " . $e->getMessage();
    }
    
?>