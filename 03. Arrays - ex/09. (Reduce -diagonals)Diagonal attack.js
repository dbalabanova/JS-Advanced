function main(array) {
let matrix = array.reduce((acc,curr,index,arr)=>{
    let line = curr.split(' ').map(Number)
    acc.push(line);
    return acc
},[])
let diagonals = matrix.reduce((acc,curr,i,arr)=>{
acc[0]+=curr[i];
acc[1]+=curr[arr.length-1-i];

return acc
},[0,0]);
if(diagonals[0]===diagonals[1]){
let result = matrix.reduce((acc,curr,i,arr)=>{
    debugger
        let el = curr;
        for (let j = 0; j < el.length; j++) {
            if(j!==i && j!==(el.length-1-i)){
                el[j]=diagonals[0]
            }
            
        }
        return acc;
},[...matrix]);
return result.map(el=>el.join(' ')).join('\n')
} else {
    return matrix.map(el=>el.join(' ')).join('\n')
}

}
console.log(main(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
));
