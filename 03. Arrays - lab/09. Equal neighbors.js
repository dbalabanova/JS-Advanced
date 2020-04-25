function main(array) {
    let result = 0;
for (let i = 0; i < array.length-1; i++) {
    let curr =array[i].filter((element,index)=>array[i+1][index]===element)
    
    result+=curr.length
    
}
return result
}
console.log(main([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
