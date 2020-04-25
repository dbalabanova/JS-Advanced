function magic(array) {
let sum = array[0].reduce((a,b)=> a+b,0);
let isMagic = true;
for (let i = 0; i < array.length; i++) {
    let sumRow = 0;
    let sumCol = 0;
    sumRow=array[i].reduce((a,b)=> a+b,0)
    sumCol = array.map((x)=>x[i]).reduce((a,b)=>a+b,0);
    if(sumRow!==sumCol||sumCol!==sum||sumRow!==sum){
        isMagic=false;
    }
}
return isMagic
}
console.log(magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
