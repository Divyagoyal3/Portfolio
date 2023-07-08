var cursor = document.querySelector(".cursor");

//cursor movement

document.onmousemove =function(e){
  cursor.style.top = (e.pageY - 25) + "px";
  cursor.style.left = (e.pageX - 25) + "px";
  cursor.style.display = "block";
}


 //gsap
 gsap.from(".bar abbr",{
    scrollTrigger:".bar",
    left:0,
    ease:Power2.easeInOut,
    duration: 3,
    stagger:0.1
 });
 gsap.from(".bar span",{
    scrollTrigger:".bar",
    width:"0px",
    ease:Power2.easeInOut,
    duration: 3,
    stagger:0.1
 });