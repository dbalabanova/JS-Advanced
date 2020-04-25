function printing(array) {
let copy = array.slice();
let delimiter = copy.pop();
console.log(copy.join(`${delimiter}`));

}
printing(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)