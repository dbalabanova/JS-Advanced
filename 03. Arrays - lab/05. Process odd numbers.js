function odd(array) {
    let numbers=[];
    array
    .map((x,index,array)=>{
        debugger
        if(index%2!==0){
    numbers.push(x*2)
        }
        
    })
    //.reverse()
    console.log(numbers.reverse());
    
    }
    odd([10, 15, 20, 25])