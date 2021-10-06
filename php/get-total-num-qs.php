<?php
    include 'conn.php';
    
    $sql = "SELECT count( * ) FROM questions";
    $result = mysqli_query($conn, $sql);

    while ($row = mysqli_fetch_array($result)) {
        echo $row[0];
    }
?>