function toggle() {
    let text = document.getElementById('extra');
    const button = document.querySelector('span[class=button]')
    if (button.innerHTML === "More") {
        text.style.display = 'block'
    button.innerHTML = "Less"
    }
    
        else if (button.innerHTML === "Less") {
            text.style.display = 'none'
            button.innerHTML = "More"
        }
    

}