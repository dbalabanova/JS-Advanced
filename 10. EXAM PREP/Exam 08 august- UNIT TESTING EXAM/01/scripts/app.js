function solve() {
    let title = document.querySelector('input[placeholder="Add Title"]');
    let year = document.querySelector('input[placeholder="Add Year"]');
    let price = document.querySelector('input[placeholder="Add Price"]');
    let addNewButton = document.querySelector('button');
    let newBookShelf = Array.from(document.querySelectorAll('.bookShelf'));
    let oldBooks = newBookShelf[0];
    let newBooks = newBookShelf[1];
    let profit = 0;
    addNewButton.addEventListener('click', function addBook(e) {
        e.preventDefault();
        if (title.value.length !== 0 && Number(year.value) > 0 && Number(price.value) > 0) {
            let priceBook = Number(price.value);
            let createButtonMoveToOld
            let createNewBookDiv = document.createElement('div');
            createNewBookDiv.className = "book";
            let createNewBookP = document.createElement('p');
            let createButtonBuy = document.createElement('button');
            createButtonBuy.innerHTML = `Buy it only for ${priceBook.toFixed(2)} BGN`;
            createNewBookP.innerHTML = `${title.value} [${year.value}]`;
            // createNewBookP.appendChild(createButtonBuy)
            createNewBookDiv.appendChild(createNewBookP);
            createNewBookDiv.appendChild(createButtonBuy);
            if (Number(year.value) >= 2000) {
                createButtonMoveToOld = document.createElement('button');
                createButtonMoveToOld.innerHTML = `Move to old section`;
                createNewBookDiv.appendChild(createButtonMoveToOld);

                createButtonMoveToOld.addEventListener('click', function moveToOld() {
                    let createOldBookDiv = document.createElement('div');
                    createOldBookDiv.className = "book";
                    let createOldBookP = document.createElement('p');
                    let createButtonBuyOld = document.createElement('button');
                    createButtonBuyOld.innerHTML = `Buy it only for ${(priceBook * 0.85).toFixed(2)} BGN`;
                    createOldBookP.innerHTML = `${title.value} [${year.value}]`;
                    //createNewBookP.appendChild(createButtonBuy);
                    createOldBookDiv.appendChild(createOldBookP);
                    createOldBookDiv.appendChild(createButtonBuyOld);
                    newBooks.removeChild(createNewBookDiv);
                    oldBooks.appendChild(createOldBookDiv);

                    createButtonBuyOld.addEventListener('click', function increaseProfit() {
                       //console.log(this.parentNode.parentNode)
                        oldBooks.removeChild(createOldBookDiv);
                        profit += priceBook;
                        let profitElem = Array.from(document.querySelectorAll('h1'))[1];
                        profitElem.innerHTML = `Total Store Profit: ${(profit * 0.85).toFixed(2)} BGN`
                    })

                })
            }
            newBooks.appendChild(createNewBookDiv);

            if (Number(year.value) < 2000) {
                let createOldBookDiv = document.createElement('div');
                createOldBookDiv.className = "book";
                let createOldBookP = document.createElement('p');
                let createButtonBuyOld = document.createElement('button');
                createButtonBuyOld.innerHTML = `Buy it only for ${(priceBook * 0.85).toFixed(2)} BGN`;
                createOldBookP.innerHTML = `${title.value} [${year.value}]`;
                //createNewBookP.appendChild(createButtonBuy);
                createOldBookDiv.appendChild(createOldBookP);
                createOldBookDiv.appendChild(createButtonBuyOld);
                newBooks.removeChild(createNewBookDiv);
                oldBooks.appendChild(createOldBookDiv);

                createButtonBuyOld.addEventListener('click', function increaseProfit() {
                    oldBooks.removeChild(createOldBookDiv);
                    profit += priceBook;
                    let profitElem = Array.from(document.querySelectorAll('h1'))[1];
                    profitElem.innerHTML = `Total Store Profit: ${(profit * 0.85).toFixed(2)} BGN`
                })
            }

            createButtonBuy.addEventListener('click', function increaseProfit() {
                newBooks.removeChild(createNewBookDiv);
                profit += priceBook;
                let profitElem = Array.from(document.querySelectorAll('h1'))[1];
                profitElem.innerHTML = `Total Store Profit: ${profit.toFixed(2)} BGN`
            })


        }
    })
}