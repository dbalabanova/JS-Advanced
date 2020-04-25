function solve(x) {
let string = x.toString().split('');
let sum = 0;
let result = true;
for (let i = 0; i < string.length; i++) {
    let curr = string[i];
    sum +=Number(curr);
    if(curr!==string[0]){
        result = false;
    }
}
console.log(result);
console.log(sum);

}
solve(22212)