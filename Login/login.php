<?php
$server="localhost";
$username="root";
$pass="";
$db="login";
session_start();
$con=mysqli_connect($server, $username, $pass, $db);
$uname=$_POST['name'];
if(!$con)
{
    die("Connection failed".mysqli_connect_error());
}
$query = "SELECT uname FROM `user` where uname='$uname';"; 
// FETCHING DATA FROM DATABASE 
$result = $con->query($query); 

  if ($result->num_rows > 0)  
  { 
      // OUTPUT DATA OF EACH ROW 
      while($row = $result->fetch_assoc()) 
      { 
          $not_p=false;
          $up=$row["uname"];
        //   header('Location:index.html');
        // include('index.html');
    //     echo '<script type="text/JavaScript">  
    //  alert("GeeksForGeeks"); 
    //  </script>'; 
          $_SESSION['uname']=$up;
          $_SESSION['not_p']=$not_p;
      } 
  }  
  else { 
      $not_p=true; 
    //   header('Location:index.html');
      $_SESSION['uname']="";
      $_SESSION['not_p']=$not_p;
  } 
 $con->close(); 
?> 