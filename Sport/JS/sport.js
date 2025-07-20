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

const slides=document.getElementsByClassName("slides");
let i= 0;
let q=0;
let c=0;
function on_load()
{
    i=slides.length;
    q=parseInt(i/2);
    c=q;
    slides[c].setAttribute("class","slides active");
    slides[c+1].setAttribute("class","slides next");
    slides[c-1].setAttribute("class","slides prew");
    // alert(slides[c].getAttribute("class"));

}

var move=0;
var en=0;
var tempr=0;
var templ=0;
function right(m)
{   
    if(en==1)
    {
        document.getElementById("leftb").disabled=false;
        en=0;
    }
    move=move+parseInt(m);
    tempr=move;
    c++;
    // alert(c);
    if(c+1>=i)
    {
    slides[c].setAttribute("class","slides active");
    slides[c-1].setAttribute("class","slides prew");
    }
    else{
        slides[c].setAttribute("class","slides active");
        slides[c+1].setAttribute("class","slides next");
        slides[c-1].setAttribute("class","slides prew");
    }
    document.getElementById("slideshow").style.transition="500ms";
    document.getElementById("slideshow").style.transform="translate3d("+move+"px, 0px, 0px)";
    if(move==-760)
    {
        move=0;
        document.getElementById("rightb").disabled=true;
        en=1;
        move=tempr;
        // document.getElementById("slideshow").style.transform="translate3d(0px, 0px, 0px)";
    }   
}
function left(m)
{   
    // move_r-=m;
    if(en==1)
    {
        document.getElementById("rightb").disabled=false;
        en=0;
    }
    c--;
    if(c-1<0)
    {
    slides[c].setAttribute("class","slides active");
    slides[c+1].setAttribute("class","slides next");
    }
    else{
        slides[c].setAttribute("class","slides active");
        slides[c+1].setAttribute("class","slides next");
        slides[c-1].setAttribute("class","slides prew");
    }
    move=move+parseInt(m);
    templ=move;
    document.getElementById("slideshow").style.transition="500ms";
    document.getElementById("slideshow").style.transform="translate3d("+move+"px, 0px, 0px)";
    if(move==760)
    {
        move=0;
        document.getElementById("leftb").disabled=true;
        // alert("saif");  
        en=1;
        move=templ;
        // document.getElementById("slideshow").style.transform="translate3d(0px, 0px, 0px)";
    }
    
}



