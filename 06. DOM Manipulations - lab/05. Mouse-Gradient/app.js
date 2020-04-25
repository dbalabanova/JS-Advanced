function attachGradientEvents() {
    let zone = document.getElementById('gradient-box');
    zone.addEventListener('click', function coordinates (e){
        let xEvent = e.clientX
        let width=parseInt(getComputedStyle(document.all.gradient).width);
        let result = percent(xEvent,width);
    let output = document.getElementById('result');
    output.innerHTML=result;    
    })
function percent (x,y){
return `${Math.floor(x/y*100)}%`
}
}