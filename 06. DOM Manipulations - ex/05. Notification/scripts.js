function notify(message) {
let notificated = document.getElementById('notification');
let show=notificated.innerHTML=message;
notificated.style.display='block'

setTimeout(()=>{
    notificated.style.display='none'

},2000)
}