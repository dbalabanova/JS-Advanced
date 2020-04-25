function solve(array) {
let obj ={};
for (let i = 0; i < array.length; i+=2) {
    let product = array[i];
    let calories = array[i+1];
    obj[product]=Number(calories)
}
console.log(obj);

}
solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])