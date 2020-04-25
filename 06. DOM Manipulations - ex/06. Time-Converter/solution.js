function attachEventsListeners() {
let buttons = Array.from(document.querySelectorAll('input[type=button]'));
buttons.map(x=>x.addEventListener('click', function converts(){
   
   // console.log(x.previousElementSibling);
    if(x.id==='daysBtn'){
        let initial = (x.previousElementSibling.value);
        console.log(initial);
        let hours = document.getElementById('hours')
        hours.value=initial*24;
        let minutes = document.getElementById('minutes')
        minutes.value=initial*1440 ;
        let seconds = document.getElementById('seconds')
        seconds.value=initial*86400;
    } else if (x.id==='hoursBtn'){
        let initial = (x.previousElementSibling.value);
        console.log(initial);
        let days = document.getElementById('days')
        days.value=initial/24;
        let minutes = document.getElementById('minutes')
        minutes.value=initial*60 ;
        let seconds = document.getElementById('seconds')
        seconds.value=initial*3600;
    }else if (x.id==='minutesBtn'){
        let initial = (x.previousElementSibling.value);
        console.log(initial);
        let days = document.getElementById('days')
        days.value=initial/1440;
        let hours = document.getElementById('hours')
        hours.value=initial/60 ;
        let seconds = document.getElementById('seconds')
        seconds.value=initial*60;
    }else if (x.id==='secondsBtn'){
        let initial = (x.previousElementSibling.value);
        console.log(initial);
        let days = document.getElementById('days')
        days.value=initial/86400;
        let hours = document.getElementById('hours')
        hours.value=initial/3600 ;
        let minutes = document.getElementById('minutes')
        minutes.value=initial/60;
    }
}))

}