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