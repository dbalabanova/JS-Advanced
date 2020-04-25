function tickets(array, criteria) {
    let arr=[]
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        
    }
    for (let line of array) {
let [destination,price,status]=line.split('|');
price=Number(price)
let ticket=new Ticket(destination,price,status);
arr.push(ticket)
    }
    let sorted = arr.sort((a,b)=>{
        let valuesA= Object.values(a);
           let valuesB= Object.values(b);
        if(criteria==='destination'){
           return valuesA[0].localeCompare(valuesB[0])
        } else if (criteria==='price'){
           return valuesA[1]-valuesB[1]
        }else if (criteria==='status'){
           return valuesA[2].localeCompare(valuesB[2])

         }
        
    })
    return sorted
    
}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
))