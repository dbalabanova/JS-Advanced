function deleteByEmail() {
const emails = Array.from(document.querySelectorAll("#customers > tbody > tr > td:nth-child(2)"))
const deleteButton = document.querySelector("body > label > button");
let textInput=document.querySelector('body > label > input');
//console.log(emails[0].innerHTML);

    for (let email of emails) {
       //debugger
        if(email.innerHTML===textInput.value){
            let textEmail = email.parentNode
            let line = textEmail;
            line.parentNode.removeChild(line);
        } else {
            let notFoundOutput = document.getElementById('result');
            notFoundOutput.innerHTML="Not found."
        }
    }
}

