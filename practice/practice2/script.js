window.addEventListener("mousemove",function(details){
  gsap.to("#rect",{
   left : details.clientX + "px",
   ease : Power4
  });
});