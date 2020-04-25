
function cityMarkets(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let current = array[i]
            .split(' -> ')
        let currentMoney = current[2].split(' : ');
        let currentIncome = Number(currentMoney[0]) * Number(currentMoney[1])
        let currentTown = current[0];
        let currentProduct = current[1];
        if (!obj[currentTown]) {
            obj[currentTown] = [];

            if (!obj[currentTown].includes(currentProduct)) {
                obj[currentTown].push(currentProduct);
                obj[currentTown].push(currentIncome);
            } else {
                obj[currentTown][1] += currentIncome;
            }
        } else {
            if (!obj[currentTown].includes(currentProduct)) {
                obj[currentTown].push(currentProduct);
                obj[currentTown].push(currentIncome);
            } else {
                obj[currentTown][1] += currentIncome;
            }
        }
    }
    let tuples = Object.entries(obj);
    for (let line of tuples) {
        let [theTown,products]=line
        console.log(`Town - ${theTown}`);
        for (let i = 0; i < products.length; i+=2) {
            console.log(`$$$${products[i]} : ${products[i+1]}`);
        }
        //console.log(products);
        
    }
   // console.log(tuples);

}
cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
)