function rotate(array) {
let copy = array.slice();
let times = Number(copy.pop());
let necessary = times%(array.length-1)
for (let i = 0; i < necessary; i++) {
   copy.unshift(copy[copy.length-1]);
   copy.pop();

}
console.log(copy.join(' '));
}
rotate(['1', 
'2', 
'3', 
'4', 
'2']);
rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
)