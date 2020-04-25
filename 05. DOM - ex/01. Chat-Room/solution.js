function solve() {
  
let sentButton = document.getElementById("send");
sentButton.addEventListener('click', ()=>{
   let createMessageElement = document.createElement('div');
  createMessageElement.className= "message my-message";

   let createContentMessage = document.getElementById('chat_input')
   let createContentValue = createContentMessage.value;

   createMessageElement.textContent=createContentValue;
   let parent = document.getElementById("chat_messages");
   parent.appendChild(createMessageElement);
   createContentMessage.value='';
})
  
  //console.log(createcontentValue);
   
}


