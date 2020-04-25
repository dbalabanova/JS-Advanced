function main(n, k) {
    let array = new Array(n)
     for (let i = 1; i < array.length; i++) {
         array[0]=1
        if(i-k<0){
            let el = array.slice(0,i+1).reduce((a,b)=>a+b,0)
        array[i]=el;
        } else {
            let el = array.slice(i-k,i+1).reduce((a,b)=>a+b,0)
            array[i]=el;
        }

     }   
     return array
    // let result = array.reduce((acc, curr, i, arr) => {
    //     debugger
    //     //acc[0] = 1;
    //     if (i - k < 0) {
    //         curr = acc.slice(0, i+1).reduce((a, b) => a + b, 0)
    //         acc[i] = curr;
    //     } else {
    //         curr = acc.slice(i - k, i+1).reduce((a, b) => a + b, 0)
    //         acc[i] = curr;
    //     }
    //     return acc
    // },[...array]);
    // return result
}
console.log(main(6, 3));
console.log(main(8, 2))