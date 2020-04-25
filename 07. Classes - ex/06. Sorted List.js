class List{
    constructor(){
        this.numbers=[];
        this.size=0
    }
    add(element){
        this.numbers.push(element);
        this.numbers.sort((a,b)=>a-b);
        this.size++
        
    }
    remove(index){
        if(index>=0&&index<this.size){
           let remove= this.numbers.splice(index,1);
            this.size--
        }

    }
    get(index){
        if(index>=0&&index<this.size){
            return this.numbers[index]
        }
    }
   
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
//console.log(list.numbers)
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
