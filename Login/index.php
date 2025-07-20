<?php
$server="localhost";
$un="root";
$pass="";
$db="login";
$inserted=false;
$notinserted=false;
session_start();

if(isset($_POST['name1']))
{
    $con=mysqli_connect($server, $un, $pass);
    if(!$con)
    {
        die("Connection failed".mysqli_connect_error());
    }
    // echo "Successfully connected";
    $name1 = $_POST['name1'];
    $username = $_POST['username'];
    $pass1 = $_POST['pass1'];
    $query = "SELECT uname FROM `login`.`user` where uname='$username';"; 
    $result = $con->query($query); 
    $user=$username;
    if ($result->num_rows > 0)  
    { 
        $notinserted=true;
    }
    else{
        $sql="INSERT INTO `login`.`user` (`name`, `uname`, `pass`) VALUES ('$name1', '$username', '$pass1');";
        if($con->query($sql)==true)
        {
            $inserted=true;
            $_SESSION["usern"]=$username;
            // $cookuname=$username;
            // setcookie("unmae",$cookuname);
        }
        else
            echo "Failed $sql<br> $con->error";
    }
}
if(isset($_POST['uname1']))
{
    $con=mysqli_connect($server, $un, $pass, $db);
    if(!$con)
    {
        die("Connection failed".mysqli_connect_error());
    }
    $uname=$_POST["uname1"];
    $user=%uname;
    $query = "SELECT uname FROM `user` where uname='$uname';"; 
    // FETCHING DATA FROM DATABASE 
    $result = $con->query($query); 
    
      if ($result->num_rows > 0)  
      { 
          // OUTPUT DATA OF EACH ROW 
          while($row = $result->fetch_assoc()) 
          { 
              $not_p=false;
            //   $up=$row["uname"];
            //   header('Location:index.html');
            // include('index.html');
            //     echo '<script type="text/JavaScript">  
            //  alert("saif"); 
            //  </script>'; 
            //   $_SESSION['uname']=$up;
            //   $_SESSION['not_p']=$not_p;
            // echo $row["uname"];
          } 
      }  
      else { 
        //   $not_p=true; 
        // //   header('Location:index.html');
        //   $_SESSION['uname']="";
        //   $_SESSION['not_p']=$not_p;
        // echo "not present";
      } 
     $con->close(); 
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="CSS/login.css">
    <script> 
    function home()
    {
    var x = "<?php echo $user ?>";
    sessionStorage.setItem("uname",x);
    window.open()
    } 
    </script>
    <title>Rent a Ride</title>
</head>
<body onload="load()">
<div id="bg" >
    <img src="IMG/car_bg5.jpg" alt="car" name="cars">
</div>
<div class="container">
    <i class="fa fa-close" id="close" onclick="history.back()"></i>
    <div class="cont">
        <div class="c1" id="c1">
            <h2 class="h22">LOGIN</h2> 
            <form action="" method="post">
                <div class="col">
                    <div class="input_div">
                    <i class="fa fa-envelope-o icon"></i>
                    <input class="login" type="text" id="uname1" name="uname1" placeholder="Enter Username/Email" onkeyup="validate_uname1()">
                    <span class="lg"></span>
                    </div>
                    <!-- <i class="fa fa-exclamation-triangle" style="color: red;">saif</i> -->
                    <i class="fa fa-exclamation-circle " style="color: green; display: none;" id="e_uname1"> saif</i>
                </div>
    
                <div class="col">
                    <div class="input_div">
                    <i class="fa fa-eye-slash icon" onclick="show()" id="cls"></i>
                    <input class="login" type="password" name="pass" id="pass" placeholder="Enter Password" onkeyup="validate_pass()">
                    <span class="lg"></span>
                    </div>
                    <i class="fa fa-exclamation-circle" style="color: red; display: none;" id="e_pass"> saif</i>
                </div>
                <!-- <input type="submit" id="log" value="LOGIN" disabled> -->
                <button id="log" disabled>LOGIN</button>
            </form>
        </div>
        <div class="c2" id="c2">
            <h2 class="h22">REGISTER</h2>
            <form action="" method="post">
                <div class="col1">
                    <div class="input_div">
                    <i class="fa fa-user icon"></i>
                    <input class="regis" type="text" name="name1" id="name" placeholder="Enter Name" onkeyup="validate_name()">
                    <span class="lg"></span>
                    </div>
                    <i class="fa fa-exclamation-circle" style="color: red; display: none;" id="e_name"></i>
                </div>
                <div class="col1">
                    <div class="input_div">
                    <i class="fa fa-envelope icon"></i>
                    <input class="regis" type="text" name="username" id="uname" placeholder="Enter Username/Email" onkeyup="validate_uname()">
                    <span class="lg"></span>
                    </div>
                    <i class="fa fa-exclamation-circle" style="color: green; display: none;" id="e_uname"></i>
                </div>
                <div class="col1">
                    <div class="input_div">
                    <i class="fa fa-eye-slash icon" onclick="show1()" id="cls1"></i>
                    <input class="regis" type="password" name="pass1" id="pass1" placeholder="Enter Password" onkeyup="validate_pass1()">
                    <span class="lg"></span>
                    </div>
                    <i class="fa fa-exclamation-circle" style="color: green; display: none;" id="e_pass1"> saif</i>
                </div>
                <div class="col1">
                    <div class="input_div">
                    <i class="fa fa-retweet icon"></i>
                    <input class="regis" type="password" name="retype" id="retype" placeholder="Retype Password" onkeyup="validate_retype()">
                    <span class="lg"></span>
                    </div>
                    <i class="fa fa-exclamation-circle" style="color: green; display: none;" id="e_retype"> saif</i>
                </div>
                <input type="submit" id="reg" value="REGISTER" onclick="chk2()" disabled>
            </form>
        </div>
        <div class="c3" id="p3" style="background-image: url(IMG/REDCAR.jpg);">
            <!-- <input type="button" id="btn" onclick="trans()" value="REGISTER"> -->
            <!-- <h4 id="btn" onclick="trans()">REGISTERS</h4> -->
            <div id="col4">
                <center> 
                    <img src="Img/logo.png" class="logo" id="logo"><br><br><br><br><br>
                    <font style="font-family: 'Lobster', cursive; font-size: 30px; color: white; white-space: nowrap;">
                        Welcome to Rent-A-Ride !
                    </font><br><br>
                    <font style="font-family: 'Righteous', cursive; color: white;">
                        Login to your accounts to discover the great features of CAR RENTAL System
                    </font><br><br><br><br><br><br>
                    <label id="btn" onclick="trans()">New User? <b><u>REGISTER</u></b></label>
                </center>
            </div>
            <div id="col5">
                <center> 
                    <img src="Img/logo.png" class="logo" id="logo"><br><br><br><br><br>
                    <font style="font-family: 'Lobster', cursive; font-size: 30px; color: white; white-space: nowrap;">
                        Welcome to Rent-A-Ride !
                    </font><br><br>
                    <font style="font-family: 'Righteous', cursive; color: white;">
                        Login to your accounts to discover the great features of CAR RENTAL System
                    </font><br><br><br><br><br><br>
                    <label id="btn" onclick="trans()">Already Have An Account?  <b><u>LOGIN</u></b></label>
                </center>
            </div>
            <div id="col2">
            </div>
            <div id="col3">
            </div>
        </div>
    </div>
    <?php
        if($notinserted==true)
        {
            echo "<p id='error'><i class='fa fa-exclamation-circle' style='color:red;'></i>Username Already Exists </p>";
        }
        if($inserted==true)
        {
            echo "<div id='in_bg'></div>
            <div id='inserted'>
            <h2>Register Successfully</h2>
            <button id='go_home' onclick='home()'>OK</button>
            </div>";
        }
    ?>
    
    
</div>
    <script src="JS/index.js"></script>
    
</body>
</html>
