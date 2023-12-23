<?php
    include '../includes/preReq.php';

    if($_SERVER["REQUEST_METHOD"] == "GET"){
        // dummy sql insert query
        $sql = "INSERT INTO comment_table (post_id, user_id, user_name, comment, level, ref_id, root_id) 
        VALUES (-1 ,-1, 'dummy', 'dummy', -1, -1, -1)";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $sql = "SELECT created_at FROM comment_table WHERE post_id = -1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $sql = "DELETE FROM comment_table WHERE post_id = -1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        echo json_encode($data); 
    }   
?>