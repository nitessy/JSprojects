

const timer = document.getElementById("stopwatch");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = null;
let start = document.getElementById("start") ;
let sttop = document.getElementById("stop");
let reset = document.getElementById("reset");





function timerCycle() {

    sec = sec + 1;

    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }
    if (min === 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    let newtime =  `${hr.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;

    timer.innerHTML = newtime;

}

start.addEventListener('click', () => {
if(stoptime === null){
  stoptime = setInterval(timerCycle,1000);
}
});

sttop.addEventListener('click' , () => {
  clearInterval(stoptime);
  stoptime = null; 
});


reset.addEventListener('click', () =>{
  clearInterval(stoptime);
  stoptime = null;
  sec = 0;
  min = 0;
  hr = 0;
  timer.innerHTML = "00:00:00" ;
});


const icon = document.getElementsByClassName("hamburgerlines")[0];
icon.addEventListener('click', () =>{
    icon.classList.toggle("open");
});
