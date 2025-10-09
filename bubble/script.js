var timer = 5;
var score = 0;
var hitran = 0;
function getscore(){
   score += 10;
   document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
  hitran = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitran;
}

function makeBubble(){
  var clutter = " ";

for(var i=1; i<=154; i++){
  var rn = Math.floor(Math.random()*10);
 clutter +=`<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
};


function countdown(){
  var tim = setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector("#Timerval").innerText = timer;
    }else{
      clearInterval(tim);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> <h2>Your Score is ${score}</h2>`;
    }
  },1000);
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
  var clickname = Number(dets.target.textContent);
  if(clickname === hitran){
    getscore();
    makeBubble();
    getNewHit();
  }

});

getNewHit();
countdown();
makeBubble();
getscore();