let timer = document.querySelector(".timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");

let count= 0;
function increaseCount(){
  timer.innerText = count++;
}

let id = setInterval(increaseCount,1000)
start.addEventListener("click",()=>{
    console.log("Start");
});

reset.addEventListener("click",() => {
    console.log("Reset");
});