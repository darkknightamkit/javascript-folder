var an = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag =0;
btn.addEventListener("click",function(){
  if(flag == 0){
     an.style.backgroundColor = "yellow"
     flag = 1;
  }else{
    an.style.backgroundColor = "red"
  }
  
})