function solve() {
  let textElement = document.querySelector('#input')
  let text = textElement.innerHTML;
  let sentences = text.split('. ')
  
  if(sentences.length===2){
    let createParagraphElement = document.createElement("p");
    createParagraphElement.textContent = text;
  } else if (sentences.length>2){
    let paragraphNumbers = Math.ceil(sentences.length/3);
    for (let i = 0; i < paragraphNumbers; i++) {
    let createParagraphElement = document.createElement("p");
  createParagraphElement.textContent= `${sentences[0]}. ${sentences[1]}. ${sentences[2]}`;
  sentences = sentences.slice(2,sentences.length);    
let outputElement = document.querySelector('#output');
outputElement.appendChild(createParagraphElement);
}
  }
  
  
}