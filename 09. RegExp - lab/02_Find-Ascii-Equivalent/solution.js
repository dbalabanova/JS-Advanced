function solve() {
  //debugger
let text = document.getElementById('text').value;
let result = document.getElementById('result');
let createP= document.createElement('p');

let patternWords = /[A-Za-z]+/g;
let patternNumbers = /[0-9]+/g;
let words = text.match(patternWords);
let numbers = text.match(patternNumbers);
let output=[];
let word = ''
let wordsToNumbers=words.forEach((word)=>{
  output.push(word.split('').map(x=>x.charCodeAt()).join(' ')) 
})
let numbersToWrods = numbers.forEach((number)=>{
  word+=String.fromCharCode(number)
//output.push((String.fromCharCode(number)))
});
output.push(word)
output=output.join('\n');
createP.innerHTML=output;
result.appendChild(createP)
//console.log(output)
}
//(solve('83 111 John Adams 102 116 85 Roger 110 105'))