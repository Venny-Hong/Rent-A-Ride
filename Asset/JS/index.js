//not in use
//not in use
//not in use
//not in use
//not in use
var t=0,p=0;
var loaded=0;
function trans()
{
    if(t!=1)
    {
        // document.getElementById("btn").innerHTML="LOGIN";
        document.getElementById("p3").style.transform="translateX(-392px)";
        document.getElementById("p3").style.transition="all 1.5s";
        // document.getElementById("p3").style.background="linear-gradient(rgb(61, 60, 60),black)";
        // document.getElementById("btn").style.display="none";
        document.getElementById("btn").style.transition="all 1.5s";
        // document.getElementById("btn").style.backgroundColor="white"
        document.getElementById("c1").style.transform="scale(0.6,0.6)"
        document.getElementById("c1").style.transition="all 1.5s";
        document.getElementById("c2").style.transform="scale(1,1)"
        document.getElementById("c2").style.transition="all 1.5s";
        // document.getElementById("col2").style.transform="translate(-40px,40px)"
        document.getElementById("col2").style.transform="skew(35deg) translate(-500px,10px)"
        document.getElementById("col2").style.transition="all 2.5s";
        document.getElementById("col3").style.transform="skew(35deg) translateX(0px)"
        document.getElementById("col3").style.transition="all 2.5s";
        document.getElementById("col4").style.transform="translateX(800px)"
        document.getElementById("col4").style.transition="all 2s";
        document.getElementById("col5").style.transform="translateX(0px)"
        document.getElementById("col5").style.transition="all 2s";
        t=1
    }
    else
    {
        // document.getElementById("btn").innerHTML="REGISTER";
        document.getElementById("p3").style.transform="translateX(0.3px)";
        document.getElementById("p3").style.transition="all 1.5s";
        // document.getElementById("p3").style.background="linear-gradient(black,rgb(61, 60, 60))";     
        document.getElementById("btn").style.transition="all 1.5s";
        // document.getElementById("btn").style.backgroundColor="white"
        document.getElementById("c1").style.transform="scale(1,1)"
        document.getElementById("c1").style.transition="all 1.5s";
        document.getElementById("c2").style.transform="scale(0.6,0.6)"
        document.getElementById("c2").style.transition="all 1.5s";
        document.getElementById("col2").style.transform="skew(35deg) translate(0px,0px)"
        document.getElementById("col2").style.transition="all 2.5s";
        document.getElementById("col3").style.transform="skew(35deg) translateX(510px)"
        document.getElementById("col3").style.transition="all 2.5s";
        document.getElementById("col4").style.transform="translateX(0px)"
        document.getElementById("col4").style.transition="all 2s";
        document.getElementById("col5").style.transform="translateX(-500px)"
        document.getElementById("col5").style.transition="all 2s";
        t=0;
    }
}
function show()
{
    var pass=document.getElementById("pass");
    var c =document.getElementById("cls");
    if(pass.type==="password")
    {
    c.className="fa fa-eye icon";
    pass.type="text";
    }
    else
    {
    c.className="fa fa-eye-slash icon";
    pass.type="password"
    }


}
function show1()
{
    var pass=document.getElementById("pass1");
    var c =document.getElementById("cls1");
    if(pass.type==="password")
    {
    c.className="fa fa-eye icon";
    pass.type="text";
    }
    else
    {
    c.className="fa fa-eye-slash icon";
    pass.type="password"
    }
}
function validate_name()
{
    var name = document.getElementById("name").value;
    var regexp = new RegExp(/\d/);
    if(regexp.test(name)||name=="")
    {
        document.getElementById("e_name").style.display="block";
        document.getElementById("e_name").style.color="red";
        document.getElementById("e_name").innerHTML=" Invalid, Cann't contain any number!";
        if(name=="")
        document.getElementById("e_name").innerHTML=" Plz Enter Name";
    }
    else
    {
    document.getElementById("e_name").style.display="block";
    document.getElementById("e_name").style.color="green";
    document.getElementById("e_name").innerHTML=" Valid Name";
    }
    
}
function validate_uname()
{
    var n=document.getElementById("name").value;
    var i = document.getElementById("e_name").style.color;
    if(n=="" || i=="red")
    {
        document.getElementById("uname").blur();
        document.getElementById("name").focus();
    }
    var uname = document.getElementById("uname").value;
    var regexp = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/);
    var r = new RegExp(/\s/);
    if(uname.length<6||uname.length>10)
    {
        document.getElementById("e_uname").style.display="block";
        document.getElementById("e_uname").style.color="red";
        document.getElementById("e_uname").innerHTML=" Must more than 6 and less than 10";
    }
    else if(r.test(uname))
    {
        document.getElementById("e_uname").style.display="block";
        document.getElementById("e_uname").style.color="red";
        document.getElementById("e_uname").innerHTML=" Cann't contain spaces";
    }
    else if(!regexp.test(uname)||uname=="")
    {
        document.getElementById("e_uname").style.display="block";
        document.getElementById("e_uname").style.color="red";
        document.getElementById("e_uname").innerHTML=" Must contain alphanumeric value!";
        if(uname=="")
        document.getElementById("e_uname").innerHTML=" Plz Enter User Name";
    }
    else
    {
    document.getElementById("e_uname").style.display="block";
    document.getElementById("e_uname").style.color="green";
    document.getElementById("e_uname").innerHTML=" Valid User Name";
    }
    
}
var p;
function validate_pass1()
{
    var u=document.getElementById("uname").value;
    var i = document.getElementById("e_uname").style.color;
    if(u=="" || i=="red")
    {
        document.getElementById("pass1").blur();
        document.getElementById("uname").focus();
    }
    var pass1 = document.getElementById("pass1").value;
    var regexp = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[-@\_\!\#\$\%\&])[a-zA-Z0-9-@\_\!\#\$\%\&]+$/);
    var r = new RegExp(/\s/);
    p=pass1;
    if(pass1.length<6||pass1.length>15)
    {
        document.getElementById("e_pass1").style.display="block";
        document.getElementById("e_pass1").style.color="red";
        document.getElementById("e_pass1").innerHTML=" Must more than 6 and less than 15";
    }
    else if(r.test(pass1))
    {
        document.getElementById("e_pass1").style.display="block";
        document.getElementById("e_pass1").style.color="red";
        document.getElementById("e_pass1").innerHTML=" Cann't contain spaces";
    }
    else if(!regexp.test(pass1)||pass1=="")
    {
        document.getElementById("e_pass1").style.display="block";
        document.getElementById("e_pass1").style.color="red";
        document.getElementById("e_pass1").innerHTML=" Must contain 1 char 1 special & 1 no.";
        if(pass1=="")
        document.getElementById("e_pass1").innerHTML=" Plz Enter Password";
    }
    else
    {
        document.getElementById("e_pass1").style.display="block";
        document.getElementById("e_pass1").style.color="green";
        document.getElementById("e_pass1").innerHTML=" Valid Password";
    }
    
}
function validate_retype()
{
    var p=document.getElementById("pass1").value;
    var i = document.getElementById("e_pass1").style.color;
    if(p=="" || i=="red")
    {
        document.getElementById("retype").blur();
        document.getElementById("pass1").focus();
    }
    var rt = document.getElementById("retype").value;
    if(rt=="")
    {
        document.getElementById("e_retype").style.display="block";
        document.getElementById("e_retype").style.color="red";
        document.getElementById("e_retype").innerHTML=" Plz Enter Password";
    }
    else if(p==rt)
    {
        document.getElementById("e_retype").style.display="block";
        document.getElementById("e_retype").style.color="green";
        document.getElementById("e_retype").innerHTML=" Confirm Password";
        document.getElementById("reg").disabled=false;
    }
    else
    {
        document.getElementById("e_retype").style.display="block";
        document.getElementById("e_retype").style.color="red";
        document.getElementById("e_retype").innerHTML=" Incorrect Password";
    }
    
    
}
function validate_uname1()
{
    var uname1 = document.getElementById("uname1").value;
    var regexp = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/);
    var r = new RegExp(/\s/);
    if(uname1.length<6||uname1.length>10)
    {
        document.getElementById("e_uname1").style.display="block";
        document.getElementById("e_uname1").style.color="red";
        document.getElementById("e_uname1").innerHTML=" Must more than 6 and less than 10";
    }
    else if(r.test(uname1))
    {
        document.getElementById("e_uname1").style.display="block";
        document.getElementById("e_uname1").style.color="red";
        document.getElementById("e_uname1").innerHTML=" Cann't contain spaces";
    }
    else if(!regexp.test(uname1)||uname1=="")
    {
        document.getElementById("e_uname1").style.display="block";
        document.getElementById("e_uname1").style.color="red";
        document.getElementById("e_uname1").innerHTML=" Must contain alphanumeric value!";
        if(uname1=="")
        document.getElementById("e_uname1").innerHTML=" Plz Enter User Name";
    }
    else
    {
    document.getElementById("e_uname1").style.display="block";
    document.getElementById("e_uname1").style.color="green";
    document.getElementById("e_uname1").innerHTML=" Valid User Name";
    }
    
}
function validate_pass()
{
    var n=document.getElementById("uname1").value;
    var i = document.getElementById("e_uname1").style.color;
    if(n=="" || i=="red")
    {
        document.getElementById("pass").blur();
        document.getElementById("uname1").focus();
    }
    
    var pass = document.getElementById("pass").value;
    var regexp = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[-@\_\!\#\$\%\&])[a-zA-Z0-9-@\_\!\#\$\%\&]+$/);
    var r = new RegExp(/\s/);
    if(pass.length<6||pass.length>15)
    {
        document.getElementById("e_pass").style.display="block";
        document.getElementById("e_pass").style.color="red";
        document.getElementById("e_pass").innerHTML=" Must more than 6 and less than 15";
    }
    else if(r.test(pass))
    {
        document.getElementById("e_pass").style.display="block";
        document.getElementById("e_pass").style.color="red";
        document.getElementById("e_pass").innerHTML=" Cann't contain spaces";
    }
    else if(!regexp.test(pass)||pass=="")
    {
        document.getElementById("e_pass").style.display="block";
        document.getElementById("e_pass").style.color="red";
        document.getElementById("e_pass").innerHTML=" Must contain 1 char 1 special & 1 no.";
        if(pass=="")
        document.getElementById("e_pass").innerHTML=" Plz Enter Password";
    }
    else
    {
        document.getElementById("e_pass").style.display="block";
        document.getElementById("e_pass").style.color="green";
        document.getElementById("e_pass").innerHTML=" Valid Password";
        document.getElementById("log").disabled=false;
    }
    
    

}


function chk1()
{
    var lr =document.getElementById("lr");
    lr.setAttribute("id","u");
    lr.setAttribute("onclick","book()");
    lr.innerHTML="USER";
    loaded=1;
}
function load() 
{
    var i = new Image();
    var c=0;
    var image= new Array("Asset/Image/car_bg5.jpg","Asset/Image/car_bg1.jpg","Asset/Image/car_bg2.jpg","Asset/Image/car_bg3.jpg","Asset/Image/car_bg4.jpg","Asset/Image/car_bg6.jpg","Asset/Image/audi R.jpg");
    window.setInterval(function()
    {
        var s=image[c];
        document.cars.src=s;
        i.onload=function()
        {
            document.cars.style.transition="src 5";
        }
        c++;
        if(c==image.length)
        {
            c=0;
        }
    },2000);    
}

