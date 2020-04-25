function timetravel(steps,length, speed) {
    let km = steps*length/1000;
    let rests = Math.floor(km*1000/(500));
    let time = km/speed;
    let hoursMinutes = time*60;
    let initialMinutes = Math.trunc(hoursMinutes);
    let leftPortion=hoursMinutes-initialMinutes;
    let resultMinutes = initialMinutes+rests;
    let resultSeconds = Math.round(leftPortion*60);
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let consoleHours;
    let consoleMinutes;
    let consoleSeconds;
    if(resultSeconds>60){
        minutes += Math.trunc(resultSeconds/60);
        resultSeconds-=(minutes*60);
        resultMinutes+=minutes;
    }
    if(resultMinutes>60){
        hours= Math.trunc(resultMinutes/60);
        resultMinutes -=(hours*60);

    }
    if(hours<10){
        consoleHours=`0${hours}`
    }else {
        consoleHours=hours
    }
    if(resultMinutes<10) {
        consoleMinutes=`0${resultMinutes}`
    } else {
        consoleMinutes=resultMinutes
    }
    if(resultSeconds<10){
        consoleSeconds=`0${resultSeconds}`
    } else {
        consoleSeconds=resultSeconds
    }
    
   console.log(`${consoleHours}:${consoleMinutes}:${consoleSeconds}`);
    
    
    }
    timetravel(9000,0.60,5)