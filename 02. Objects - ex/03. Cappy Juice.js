function juice (array) {
    let bottles = {};
    let result  = {}
    for (let line of array) {
            let [name,quantity] = line.split(' => ');
            quantity=Number(quantity)
            if(!bottles[name]){
                bottles[name]=0
            }
           bottles[name]+=quantity
           if(bottles[name]>=1000){
               result[name]=bottles[name]
           }
    }
    let tuples = Object.entries (result);
    for (let current of tuples) {
        let [jiuceName,juceQuantity] = current
        let numBottles = Math.trunc(juceQuantity/1000);
        if(numBottles!==0){
       console.log(`${jiuceName} => ${numBottles}`);

        }
        
        
    }
   // console.log(result);
    
}
juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)