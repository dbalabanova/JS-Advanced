function solve() {
  let productName = document.querySelector(
    "#add-new > input[placeholder='Name']"
  );
  let productQuantity = document.querySelector(
    "#add-new > input[placeholder='Quantity']"
  );
  let productPrice = document.querySelector(
    "#add-new >  input[placeholder='Price']"
  );
  let addBtn = document.querySelector("#add-new > button");
  let ulAvailableProducts = document.querySelector("#products > ul");
  let filterBtn = document.querySelector("#products > div >button");
  let filterInput = document.getElementById("filter");
  let myproducts = document.querySelector("#myProducts > ul");
  let totalPrice = Array.from(document.querySelectorAll("body > h1"))[1];
  let numTotalPrice = 0;
  let buyBtn = document.querySelector('#myProducts > button');
  let ulMyProducts = document.querySelector('#myProducts > ul');
 // console.log(ulMyProducts)
 

  addBtn.addEventListener("click", addToAvailableList);

  function addToAvailableList(e) {
    e.preventDefault();
    let createLi = document.createElement("li");
    let createSpan = document.createElement("span");
    let createStrong = document.createElement("strong");

    createSpan.textContent = productName.value;
    let quantity = Number(productQuantity.value);
    createStrong.textContent = `Available: ${quantity}`;
    createLi.appendChild(createSpan);
    createLi.appendChild(createStrong);

    let createDiv = document.createElement("div");
    let createSecondStrong = document.createElement("strong");
    let createBtn = document.createElement("button");

    createSecondStrong.textContent = Number(productPrice.value).toFixed(2);
    createBtn.textContent = "Add to Client's List";

    createDiv.appendChild(createSecondStrong);
    createDiv.appendChild(createBtn);

    createLi.appendChild(createDiv);
    ulAvailableProducts.appendChild(createLi);

    createBtn.addEventListener("click", addToMyProducts);

    function addToMyProducts() {
      let createLiElement = document.createElement("li");
      let createStrongElement = document.createElement("strong");
      createLiElement.textContent = createSpan.textContent;
      createStrongElement.textContent = createSecondStrong.textContent;

      createLiElement.appendChild(createStrongElement);
      myproducts.appendChild(createLiElement);
      quantity--;
      if (quantity == 0) {
        createLi.remove();
      }
      createStrong.textContent = `Available: ${quantity}`;
      numTotalPrice += Number(createSecondStrong.textContent);
      totalPrice.textContent = `Total Price: ${numTotalPrice.toFixed(2)}`;
    }
  }

  filterBtn.addEventListener("click", filterWhatMathes);
  function filterWhatMathes(e) {
    e.preventDefault();
    let pattern = filterInput.value.toLowerCase();
    let products = Array.from(
      document.querySelectorAll("#products > ul > li > span")
    );
    for (let i = 0; i < products.length; i++) {
      let element = products[i].textContent.toLowerCase();
      if (!element.includes(pattern)) {
        products[i].parentElement.style.display = "none";
      }
    }
  }

  buyBtn.addEventListener('click',removeProducts);
  function removeProducts(e) {
   e.preventDefault();
   let listProducts = Array.from(document.querySelectorAll('#myProducts > ul > li'));
   for (let i = 0; i < listProducts.length; i++) {
      ulMyProducts.removeChild(listProducts[i])
   }
   numTotalPrice=0;
   totalPrice.textContent = `Total Price: ${numTotalPrice.toFixed(2)}`
  }
}
