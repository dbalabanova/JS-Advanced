function sumbyTown(array) {
let obj={};
for (let i = 0; i < array.length; i+=2) {
        let town = array[i];
        let number = Number(array[i+1]);
        if(!obj[town]){
            obj[town]=number;
        } else {
            obj[town]+=number
        }
}
console.log(JSON.stringify(obj));

}
sumbyTown(['Sofia',
'20',
'Varna',
'3',
'Sofia',
'5',
'Varna',
'4']);
sumbyTown(['Sofia',
'20',
'Varna',
'3',
'sofia',
'5',
'varna',
'4'])
