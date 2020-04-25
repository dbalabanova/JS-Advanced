function solve() {
   let obj = {
      Bread: 0,
      Milk: 0,
      Tomatoes: 0
   }
   let totalAmount = 0;
   let boughtProducts=[]
   let output=document.querySelector("body > div > textarea");

   let array = Array.from(document.querySelectorAll('.product-add > button '))
      .map(x => x.addEventListener('click', function addProduct() {
         let firstParent = x.parentElement;
         let higherParent = firstParent.parentElement;

         let price = higherParent.querySelector('.product-line-price').innerHTML;
         let nameOfProduct = higherParent.querySelector('.product-title').innerHTML;
         if(!boughtProducts.includes(nameOfProduct)){
            boughtProducts.push(nameOfProduct)
         }
         totalAmount += Number(price);
         //document.querySelector("body > div > textarea")
        output.value +=`Added ${nameOfProduct} for ${price} to the cart.\n`
        
       
      }))
     
      document.querySelector(".checkout")
      .addEventListener('click', function finalOutput(){

         output.value+=`You bought ${boughtProducts.join(', ')} for ${totalAmount}.`
         Array.from(document.querySelectorAll('.product-add > button '))
      .map(x => x.disable=true)
      })
      
}