<?php
$insert;
$server="localhost";
$username="root";
$pass="";
$con=mysqli_connect($server, $username, $pass);
if(!$con)
{
    die("Connection failed".mysqli_connect_error());
}
// echo "Successfully connected";
$name1 = $_POST['name1'];
$username = $_POST['username'];
$pass1 = $_POST['pass1'];
$sql="INSERT INTO `login`.`user` (`name`, `uname`, `pass`) VALUES ('$name1', '$username', '$pass1');";
// echo $sql;
 
if($con->query($sql)==true)
{
    $insert=true;
    header('Location:index.html');
}
else
    echo "Failed $sql<br> $con->error";
?>