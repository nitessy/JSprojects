const icon = document.getElementsByClassName("hamburgerlines")[0];
icon.addEventListener('click', () =>{
    icon.classList.toggle("open");
});












let hrs = document.getElementById("hours");
      let mins = document.getElementById("minutes");
      let secs = document.getElementById("seconds");
      let display = document.getElementById("display");
      let start = document.getElementById("start");
      let timer;

function m(){
  if(secs.value=="" && mins.value=="" && hrs.value==""){
    start.disabled = true;
  }
  else{ start.disabled = false;}
};
      function displaymin() {
        display.innerHTML =
          (hours.value > 1 ? hours.value : "0" + hours.value) +
          ":" +
          (minutes.value > 9 ? minutes.value : "0" + minutes.value) +
          ":" +
          (seconds.value > 9 ? seconds.value : "0" + seconds.value);
      };



      function watch() {
        start.disabled = true;//the start button will be disabled once the timer starts
        hrs.disabled = true;
        mins.disabled = true;
        secs.disabled = true;
        
        var date1 = new Date();//today's date
        var countDownDate = new Date(); //time from which the countdown will start
        countDownDate.setTime(
          date1.getTime() + hours.value * 60 * 60 * 1000 + 
            minutes.value * 60 * 1000 +
            seconds.value * 1000 +
            1 * 1000
        );

        // Update the count down every 1 second
        var x = setInterval(function () {
          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for minutes and seconds
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="display"
          display.innerHTML =
            (hours.value > 1 ? hours : "0" + hours) +
            ":" +
            (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds);
          
          var audio = new Audio("My fav.mp3");

          // If the count down is finished, play audio file
          if (display.innerHTML == "00:00:00") {
            clearInterval(x);
            audio.play()
        }}, 1000);
    }
    


    

    