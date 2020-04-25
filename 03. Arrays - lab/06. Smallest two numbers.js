function smallest(array) {
    let result =array.slice()
        .sort((a,b)=>a-b)
        .slice(0,2);
        console.log(result.join(' '));
        
    }
    smallest([30, 15, 50, 5])