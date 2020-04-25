function catalogue(array) {
    let products = {}
    let sorted = array.sort((a, b) => a.localeCompare(b));
    for (let j = 0; j < sorted.length; j++) {
        let [product, price] = sorted[j].split(' : ');
        let word = `${product}: ${price}`;
        let current = sorted[j][0];

        for (let i = 65; i <= 90; i++) {
            let letter = String.fromCharCode(i);

            if (current === letter) {
                if (!products.hasOwnProperty(current)) {
                    products[current] = []
                }
                products[current].push(word);
            }
        }
    }

    for (let key in products) {
        if (products.hasOwnProperty(key)) {
            console.log(key)
            console.log(`  ${products[key].join('\n')}`);
        }
    }
}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)