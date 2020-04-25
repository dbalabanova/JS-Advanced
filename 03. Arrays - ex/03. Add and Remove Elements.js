function actions(array) {
    let result = [];
    let current = 1;
    previous = 0
    for (let i = 0; i < array.length; i++) {
        current=previous+1;
if(array[i]==='add'){
    result.push(current)
} else if( array[i]==='remove'){
    result.pop()
}
previous = current;
    }
    if(result.length!==0){
        console.log(result.join('\n'));

    } else {
        console.log(`Empty`);
        
    }

}
// actions(['add',
//     'add',
//     'add',
//     'add']
// )
// actions(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add']
// )
actions(['remove', 
'remove', 
'remove']
)