function addProduct() {
   // debugger
    let product = document.querySelector('#add-product > label > input[type="text"]');
    let price = document.querySelector('#add-product > label > input[type="number"]');
    let totalSum = document.querySelector("#bill > tfoot > tr > td:nth-child(2)")
    let totalSumContent = Number(document.querySelector("#bill > tfoot > tr > td:nth-child(2)").textContent)
    let tableBody=document.getElementById('product-list')
    let total=0;
    let productName = product.value;
    let productPrice = Number(price.value)
    //debugger
        if(productName!=='' && !isNaN(productPrice)&& productPrice>0) {
        //debugger
                total=Number(totalSumContent)+Number(productPrice);
                totalSum.textContent=Number(total);
                let createTr = document.createElement('tr');
                let createTdProduct = document.createElement('td');
                let createTdPrice = document.createElement('td');
                createTdProduct.textContent=product.value;
                createTdPrice.textContent=price.value;
                createTr.appendChild(createTdProduct);
                createTr.appendChild(createTdPrice);

                tableBody.appendChild(createTr);

                product.value='';
                price.value='';
            
        }   
        }