var timer_is_off = true;
var t = 0;

function startPause(){
  console.log(timer_is_off);
  if(timer_is_off==false){
    timer_is_off = true;
    timedCount();
    document.getElementById('startPauseCont').innerHTML='Continue';
  }
  else{
    timer_is_off = false;
    clearInterval(timedCount());
    document.getElementById('startPauseCont').innerHTML='Pause';
  }
}

  startPauseCont.addEventListener("click", startPause)

function stopCount(){
  timer_is_off = true;
  t = 0;
  document.getElementById('startPauseCont').innerHTML='Start';
  document.getElementById('hours_min_sec').innerHTML='00:00:00';
  document.getElementById('ms').innerHTML='0';
}

  clear.addEventListener("click", stopCount)

function timedCount(){
  setTimeout(function(){
    if(timer_is_off){
      return
    }
    t++;
    var ms = t%100;
    var sec = Math.floor (t/100%60);
    var min =  Math.floor (t/100/60);
    var hours = Math.floor (t/100/60/60);
    if (hours < 10){
      hours = "0" + hours;
    }
    if (min < 10){
      min = "0" + min;
    }
    if (sec < 10){
      sec = "0" + sec;
    }
    document.getElementById('hours_min_sec').innerHTML = hours + ":" + min + ":" + sec;
    document.getElementById('ms').innerHTML = ms;
    timedCount();
  },10);
}
