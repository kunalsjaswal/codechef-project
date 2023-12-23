<?php
    include "../includes/preReq.php";
    if($_SERVER["REQUEST_METHOD"] == "DELETE"){
        $user = json_decode(file_get_contents('php://input'));
        
        // if this req has been made then delete comment by 1
        // as this api is hit by child message which has been deleted
        $sql = "SELECT replies, status, ref_id FROM comment_table WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $user->id);
        $stmt->execute();
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $sql = "UPDATE comment_table SET replies = :replies WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $replies = (int)$data['replies']-1;
        $stmt->bindParam(':replies', $replies);
        $stmt->bindParam(':id', $user->id);
        $stmt->execute();
        if($replies == 0){
                // the only reply to parent comment has been deleted
                // check if parent comment is deleted or not
            if($data['status'] == 0){
                // parent comment has been deleted previously
                $sql = "DELETE FROM comment_table WHERE id = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $user->id);
                $stmt->execute();

                if($data['ref_id'] != -1){
                    $data = ['id' => $data['ref_id']];
                    $json = json_encode($data);
                    $url = 'http://localhost/apis/codechef_api/requests/delete_parent.php';
                    
                    $ch = curl_init($url);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
                    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                        'Content-Type: application/json',
                    ));
                    
                    $response = curl_exec($ch);
                    curl_close($ch);
                }
            }
        }   

        $reponse = ['status' => 1, 'messsage' => 'recursion over'];

    }
?>