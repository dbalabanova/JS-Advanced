function magic (array){
for (let i = 0; i < array.length; i++) {
    let newArr = array.map((x)=> { debugger; 
     return   x[i]});
    console.log(newArr);
}
}
magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
    )