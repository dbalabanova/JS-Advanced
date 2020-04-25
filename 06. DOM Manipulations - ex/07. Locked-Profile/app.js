function lockedProfile() {

    const showMoreButtons = Array.from(document.querySelectorAll('button'))
    showMoreButtons.map(x=>x.addEventListener('click', function showAndHide(e) {
 let showButton = e.target;
 
        let currentPerson = e.target.parentNode;
        let lockedButton = currentPerson.querySelector('.profile input[type=radio]')
        let unlockedButton = currentPerson.querySelector('.profile input[type=radio]:nth-child(5)');
        
        // if(lockedButton.checked){
        //     showButton.style.disabled=true
        // } 
         if (unlockedButton.checked){
            showButton.style.disabled=false;
            let hiddenInfo = currentPerson.querySelector('.profile div');
            hiddenInfo.style.display='block'
            showButton.innerHTML = 'Hide it'
            showButton.addEventListener('click', function hide(){
               if(hiddenInfo.style.display==='block'&& !lockedButton.checked) {
                hiddenInfo.style.display='none';
            showButton.innerHTML = 'Show more'

               } else if(hiddenInfo.style.display==='none'&& !lockedButton.checked) {
                hiddenInfo.style.display='block'
               } 
               else if (lockedButton.checked){
                        showButton.style.disabled=true
                    }
            })
        }
        
    }))
}
