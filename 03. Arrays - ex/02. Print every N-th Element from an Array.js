function print(array) {
let result=[];
let step=Number(array.pop());
// for (let i = 0; i < array.length-1; i+=step) {
// console.log(array[i]);
// }
result=array.filter((el,index)=>{
    return index%step===0;
}).join('\n');
console.log(result);

}
print(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)