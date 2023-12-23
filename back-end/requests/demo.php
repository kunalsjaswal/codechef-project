<?php
    include "../includes/preReq.php";
    $user = json_decode(file_get_contents('php://input'));
    // gettin details
    $sql = "SELECT replies, ref_id FROM comment_table WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $user->id);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($data);
?>