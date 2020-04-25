function solve(x,y) {
let dividors = [];
for (let i = 1; i <=9; i++) {
    if(x%i===0 && y%i===0){
        dividors.push(i);
    }
    
}
let result = Math.max(...dividors)
console.log(result);

}
solve(15,5);
solve(2154, 458);