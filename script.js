let timer = document.querySelector(".timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
reset.style.visibility = "hidden";

let count = 0;
let id = null;
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function increaseCount() {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    let formattedTime = `${formatTime(minutes)}:${formatTime(seconds)}`;

    timer.innerText = formattedTime;
    count++;
}

start.addEventListener("click", () => {
    if (start.innerText === "Start") {
        id = setInterval(increaseCount, 1000);
        start.innerText = "Pause";
        start.style.backgroundColor = "rgb(248, 248, 13)";
    }
    else if(start.innerText === "Pause"){
        clearInterval(id);
        start.innerText = "Resume";
        reset.style.visibility = "visible"
    }
    else {
        id = setInterval(increaseCount, 1000);
        start.innerText = "Pause";
        start.style.backgroundColor = "rgb(248, 248, 13)";
        reset.style.visibility = "hidden";
    }
});

reset.addEventListener("click", () => {
    clearInterval(id);
    count = 0;
    timer.innerText = "00:00";
    start.innerText = "Start";
    start.style.backgroundColor = "rgb(25, 169, 25)";
    reset.style.visibility = "hidden";

});