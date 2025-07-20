let clname;
//responsive navbar code
var sidemenu=document.getElementById("sidemenu");
function closemenu(){
    sidemenu.style.right="-200px";
    document.getElementById("open").style.display="block";
}
function openmenu(){
    sidemenu.style.right="0";
    console.log("Done open");
    document.getElementById("open").style.display="none";
}
// disable button code
function able(){
var name=document.getElementById("name").value;
var emid=document.getElementById("em").value;
var mesg=document.getElementById("msg").value;
document.getElementById("butn").disabled=(name==""||emid==""||mesg=="");
}
document.getElementById('name').addEventListener('input',able);
document.getElementById('em').addEventListener('input',able);
document.getElementById('msg').addEventListener('input',able);

// google sheets code
const scriptURL = 'https://script.google.com/macros/s/AKfycbw4xTn7GB79nIUa5IO3_A7ybxrvtZ4pyK8ptBaFAl9VphufMrSfrNC7SimHdCyCXLOliQ/exec'
 const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    document.getElementById("name").value="";
    document.getElementById("em").value="";
    document.getElementById("msg").value="";
    alert("Your Response Has Been Received By Us.\nThank You For Visiting!!");
    console.log("sent");
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
});

function onloadabout()  
{
var s = document.getElementById("fselect");
clname = s.options[s.selectedIndex].text;
// alert(clname);
document.getElementById("container").style.display="none";
var x = false;
x=sessionStorage.getItem("log");
var un=sessionStorage.getItem("uname");
//  alert(x);
 if(x)
 {
    document.getElementById("lr").innerHTML=un;
    document.getElementById("lr").href="index.html";
    
 }
}

// Filter
function myfunction()
    {
        var s = document.getElementById("fselect");
        // cold = rowd.getElementsByClassName("colsd");
        // alert(rowd.children[s.selectedIndex].children[7].innerHTML);
        // alert("saif");
        // c=rowd.childElementCount;
        clname = s.options[s.selectedIndex].text;
        index=s.selectedIndex;
        document.getElementById("name1").placeholder=s.options[s.selectedIndex].text;
        
        
    }

function me(c)
    {
        document.getElementById(c).style.color="gold";
        document.getElementById(c).style.transition="all 0.3s";
    }
function ml(c)
    {
        document.getElementById(c).style.color="black";
        document.getElementById(c).style.transition="all 0.3s";
    }
function filterFunction() 
    {
        var input, filter, ul, li, a, i;
        input = document.getElementById("name1");
        filter = input.value.toUpperCase();
        // div = document.getElementById("myDropdown");
        a = document.getElementsByClassName(clname);
        // alert(a[0].parentElement.nodeName);
        for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        // alert(a[i].textContent);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].parentElement.style.display = "";
        } else {
          a[i].parentElement.style.display="none";
        }
        }
    }
    
    function filt()
    {
        document.getElementById("container").style.display="flex";
    }

    function backk()
    {
        document.getElementById("container").style.display="none";
    }