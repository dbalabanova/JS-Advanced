function solve(sentence) {
let words = sentence.match(/\w+/gim);
let upper= words.map(x=>x.toUpperCase());
console.log(upper.join(', '));

}
solve('Hi, how are you?')