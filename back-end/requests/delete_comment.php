<?php
    include "../includes/preReq.php";
    if($_SERVER['REQUEST_METHOD'] == "DELETE"){
        $user = json_decode(file_get_contents('php://input'));
        // gettin details
        $sql = "SELECT replies, ref_id FROM comment_table WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $user->id);
        $stmt->execute();
        $data = $stmt->fetch(PDO::FETCH_ASSOC);

        if($data['replies'] == 0){
            // we can delete this comment as no replies are made
            $sql = "DELETE FROM comment_table WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $user->id);
            $stmt->execute();

            // calling delete parent
            if($data['ref_id'] != -1){
                $data2 = ['id' => $data['ref_id']];
                $json = json_encode($data2);
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

            $response = ['status'=>1, 'message' => 'message deleted'];
        }else{
            // if there are replies to this comment then update it
            $sql = "UPDATE comment_table SET comment = 'This comment was delete' , status = 0 WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $user->id);
            $stmt->execute();
            $response = ['status'=>1, 'message' => 'cannot delete! replies exist'];
        }
        echo json_encode($response);
    }
?>