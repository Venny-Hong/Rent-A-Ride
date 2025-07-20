// dragging
const carousel = document.getElementById("slideshow");
let isdragging = false;
var startx, startleft,timeout;

function dragstart(event){
    event.preventDefault();
    isdragging=true;
    carousel.classList.add("dragging")
    startx=event.pageX;
    startleft=carousel.scrollLeft;
}

function dragging(event){
    if(!isdragging)
        return;
    carousel.scrollLeft=startleft - (event.pageX-startx);
}

function dragstop(event){
    isdragging=false;
    carousel.classList.remove("dragging");
}

// Buttons
const cardwidth = document.getElementById("card").offsetWidth;
function scrolling(direction){
    if (direction=="left")
        carousel.scrollLeft-=cardwidth;
    else 
        carousel.scrollLeft+=cardwidth;    
}

//Infinte Loop
const liarray = [...carousel.children];    //const liarray = Array.from(carousel.children);

// Insert copies of the cards to beginning & end of carousel for infinite scrolling 
liarray.slice(-6).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
liarray.slice(0,6).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

function infiniteScroll(){
    carousel.classList.remove("no-transition");
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = 13 * cardwidth;
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = (2 * cardwidth);
    }
    clearTimeout(timeout);
    if(!document.getElementById("wrapper").matches(":hover")) 
        autoPlay();
}
// autoplay
function autoPlay(){
    var autoscroll =function(){carousel.scrollLeft += cardwidth;};
    timeout = setTimeout(autoscroll, 1500);
}

// carousel.addEventListener("mousedown", dragstart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragstop);
carousel.addEventListener("scroll", infiniteScroll);
carousel.addEventListener("mouseleave", autoPlay);