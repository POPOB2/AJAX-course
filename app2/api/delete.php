<?php
//處理刪除資料的請求
$id=$_POST['id']; // 接收POST過來的id
$dsn="mysql:host=localhost;charset=utf8;dbname=students";
$pdo=new PDO($dsn,'root','');

$sql="DELETE FROM students WHERE id='$id'";

echo $pdo->exec($sql); // 從$pdo-> 執行(執行的內容)
// 若有刪成功得1 反之失敗為0或null


?>