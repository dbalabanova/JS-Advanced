class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {}
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    loadProducts(arrayOfProducts) {
        arrayOfProducts.forEach((e => {
            //debugger
            let [productName, productQuantity, productPrice] = e.split(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);
            if (this.budget -  productPrice >= 0) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += productQuantity;
                this.budget -=  productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`)

            }

        }));
        return this.actionsHistory.join('\n')
    }
    addToMenu(meal, neededProducts, price) {
        price = Number(price);

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            this.menu[meal]['products'] = {}
            this.menu[meal]['products'] = neededProducts
            this.menu[meal]['price'] = price;
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in our menu, try something different.`
        }
    }
    showTheMenu() {
        let output = []

        if (Object.keys(this.menu).length !== 0) {
            debugger
            Object.keys(this.menu).map(x => {
                output.push(`${x} - $${this.menu[x]['price']}`)

            })
        } else {
            output.push('Our menu is not ready yet, please come later...')
        }
        return output.join('\n').trim()
    }
    makeTheOrder(meal) {
        let output = '';
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } 
        
        let productsAndQuantityMeal = this.menu[meal].products

        for (let item of productsAndQuantityMeal) {
            let words = item.split(' ');
            let neededQuantity=Number(words.pop());
            let neededProduct = words.join(' ');
            if(this.productsInStock[neededProduct]<neededQuantity 
                || !this.productsInStock.hasOwnProperty(neededProduct)){
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
        }
        for (let item of productsAndQuantityMeal) {
            let words = item.split(' ');
            let neededQuantity=Number(words.pop());
            let neededProduct = words.join(' ');
           this.productsInStock[neededProduct]-=neededQuantity
        }
        this.budget+=this.menu[meal].price;
        return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`);
    }
}
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.makeTheOrder('Pizza'));
console.log(kitchen.makeTheOrder('frozenYogurt'));