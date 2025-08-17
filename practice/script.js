var rect= document.querySelector("#center");

rect.addEventListener("mousemove",function(deatils){
  var rec = rect.getBoundingClientRect();
  var currentin = deatils.clientX-rec.left;

  if(currentin <rec.width/2){
    var redcolor = gsap.utils.mapRange(0,rec.width/2,255,0,currentin);
    gsap.to(rect,{
     backgroundColor : `rgb(${redcolor},0,0)`,
      ease : Power4,
    })
  }else{
    var bluecolor = gsap.utils.mapRange(rec.width/2,rec.width,0,255,currentin);
    gsap.to(rect,{
     backgroundColor : `rgb(0,0,${bluecolor})`,
      ease : Power4,
    })
  }
})

rect.addEventListener("mouseleave", function(){
  gsap.to(rect,{
    backgroundColor :"white",
  })
})



