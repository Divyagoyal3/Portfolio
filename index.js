const cursor = document.querySelector(".cursor");
var timeout;
//cursor movement

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  //function animation
  function mousestopped() {
    cursor.style.display = "none";
  }
  //hode animation
  clearTimeout(timeout);
  timeout = setTimeout(mousestopped, 1000000)
});

//stop animation off the screen
 document.addEventListener("mouseout", () =>{
    cursor.style.display = 'none';
 });

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