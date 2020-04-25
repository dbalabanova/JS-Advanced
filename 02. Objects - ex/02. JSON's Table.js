function table(array) {
    console.log(`<table>`);
    
    for (let i = 0; i < array.length; i++) {
        let objectPersons = JSON.parse(array[i]);
        let values = Object.values(objectPersons)
        console.log(`   <tr>`);
        for (let el of values) {
            console.log(`       <td>${el}</td>`);
        }
        console.log(`   </tr>`);
        
    }
    console.log(`</table>`);

}
table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)