function toJson(array) {
let obj ={}
let keys = array.shift()
for (let j = 0; j < array.length; j++) {
    let [Town,Latitude,Longitude] = array[j]
    .split('|')
    .filter(x=>x.length!==0);
    Latitude=(Number(Latitude).toFixed(2));
    Longitude=(Number(Longitude).toFixed(2));
  //  console.log(Latitude);
    
    obj={
        Town,
        Latitude:Number(Latitude),
        Longitude:Number(Longitude)
    }
console.log(JSON.stringify(obj));
    
    
}

}
toJson(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
    )