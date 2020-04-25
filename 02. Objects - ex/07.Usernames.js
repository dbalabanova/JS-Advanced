function usernames(array) {
    let names =[];
    for (let name of array) {
        if(!names.includes(name)){
            names.push(name)
        }
    }
    let sortedNames = names.sort((a,b)=>{
        return a.length-b.length || a.localeCompare(b)
    })
    console.log(sortedNames.join('\n'));
    
}
usernames(['Ashton',
'Kutcher',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']
)