<?php
    include 'conn.php';

    $newCount = $_POST['newCount'];
    
    $sql = "SELECT * FROM questions WHERE question_id = '$newCount'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo $row['answer_1'];
        }
    }
?>