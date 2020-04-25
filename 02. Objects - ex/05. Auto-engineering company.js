function company(array) {
    let cars = {};
    for (line of array) {
        let [brand, model, number] = line.split(' | ');
        number = Number(number)
        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = {};
            cars[brand][model] = number
        } else {
            if (cars[brand].hasOwnProperty(model)) {
                cars[brand][model] += number
            }
            else {
                cars[brand][model] = number
            }
        }
    }
    let entries = Object.entries(cars)
    for (let [brand, info] of entries) {
        console.log(brand);
        let tuples = Object.entries(info)
        for (let i = 0; i < tuples.length; i++) {
            let current = tuples[i];
            console.log(`###${current[0]} -> ${current[1]}`);
        }
    }
}
company(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)