
  var istatus = document.querySelector("h5");
  var addfriend = document.querySelector("#add");
//  var removefriend = document.querySelector("#remove");

//   removefriend.addEventListener("click", function() {
//       istatus.innerHTML = "Stranger";
//       istatus.style.color = "red";
//     });
var check =0;
  addfriend.addEventListener("click", function() {
    if(check == 0){
      istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    check = 1;
    }else{
      istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    check = 0;
    }
    
  });

