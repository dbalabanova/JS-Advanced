function solve(...input) {

    function sorting(array){
        array.sort((a,b)=>a-b)
    }
    let obj = input.reduce((acc,curr)=>{
        debugger
        let type =typeof curr;
        typeof curr!='object'
        ? console.log(`${type}: ${curr}`)
        : console.log(`${type}:`)
        if(!acc.hasOwnProperty(type)){
            acc[type]=0 
        }
        acc[type]++;
        return acc;
    },{});
    let sorted=(Object.entries(obj)).sort(sorting)
                .forEach(([tip,num])=>{
                    console.log(`${tip} = ${num}`)
                })
    }
    solve('cat', 42, function () { console.log('Hello world!'); })