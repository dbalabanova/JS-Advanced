function coffee(array) {
    let drinks = {
        'caffeine': 0.80,
        'decaf': 0.90,
        'tea': 0.80
    }
    let totalSum = 0;
    for (let el of array) {
        let current = el.split(', ');
        let sugar = Number(current.pop());
        let insertedMoney = Number(current.shift());
        let neededMoney =0;
        if(current.includes('caffeine')){
            neededMoney= 0.80;
           } else if (current.includes('decaf')){
            neededMoney=0.90
           } 
           if (current.includes('tea')){
               neededMoney=0.80
           } 
            if (current.includes('milk')){
                let milk = (neededMoney*0.10)
               neededMoney +=milk;
               
           }
           if(sugar!==0){
               neededMoney+=0.10;
           }
           neededMoney=neededMoney.toFixed(1);
           neededMoney=Number(neededMoney);
           if(insertedMoney>=neededMoney){
           totalSum+=neededMoney;
            console.log(`You ordered ${current[0]}. Price: $${(neededMoney).toFixed(2)} Change: $${(insertedMoney-neededMoney).toFixed(2)}`);
    
           } else {
            console.log(`Not enough money for ${current[0]}. Need $${(neededMoney-insertedMoney).toFixed(2)} more.`);
    
           }
    }
    console.log(`Income Report: $${totalSum.toFixed(2)}`);
    
    }
    coffee([
        '1.00, coffee, caffeine, milk, 4',
        '0.40, tea, milk, 2',
        '1.00, coffee, decaf, 0'
      ]
      )