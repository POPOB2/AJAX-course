<?php
//處理查詢資料的請求

$classroom=$_GET['classroom'];// 從api/query.php  'get'過來的值 在此用$_GET接

$dsn="mysql:host=localhost;charset=utf8;dbname=students";
$pdo=new PDO($dsn,'root','');

$sql="SELECT * FROM students WHERE classroom='{$classroom}'";
$rows=$pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);


// print_r($rows);
echo json_encode($rows);


?>