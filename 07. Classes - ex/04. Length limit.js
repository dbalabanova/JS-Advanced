class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }
   
    decrease(value) {
        return this.innerLength = Math.max(0,this.innerLength - value)
    }
    increase(value) {
        return this.innerLength += value
    }
    toString(){
        let result=this.innerString;
        let cut = this.innerString.length-this.innerLength;
        if(this.innerString.length>this.innerLength){
            result =`${result.slice(0,cut)}...`
        } 
        if(this.innerLength===0){
            result="..."
        }
        return result
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
