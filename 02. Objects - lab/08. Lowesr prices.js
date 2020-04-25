function cheaper(array) {
 let obj={};
 let result = {};
 array.forEach((line)=>{
    let[town,product,price]=line.split(' | ');
    price=Number(price)
    if(!obj.hasOwnProperty(product)){
        obj[product] = {}
    } 
obj[product][town]=price
 });
 let entries = Object.entries(obj)
 for (let line of entries) {
     let[prod,info]=line;
     let sorted=Object.entries(info).sort((a,b)=>a[1]-b[1]);
     result[prod]=sorted[0]
    // return sorted
 }
 
  let final = Object.entries(result)
            .forEach((el)=>{
                let [product,info]=el;
                let[town,price]=info;
                console.log(`${product} -> ${price} (${town})`);
                
            })
  return final

}
console.log(cheaper(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
   'New York | Burger | 10']
))

