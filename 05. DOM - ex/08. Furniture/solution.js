// [{"name": "Sofa",
//  "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
//   "price": 150, "decFactor": 1.2}]

function solve() {

  // function createElements (type,content){
  //   let e = document.createElement(type);
  //   e.innerHTML=content;
  //   return e;
  // }
  let bougthProducts = [];
  let totalAmount = 0;
  let decFactorSum =0;
  let buttonsEnable = document.querySelector('.table input')
  buttonsEnable.disabled=false;
 // console.log(document.querySelector('#exercise button'))
  
  let button = document.querySelector('#exercise button')
    .addEventListener('click', function addtoRow() {
      debugger
      let inputField = document.querySelector('#exercise textarea');
      let obj = (JSON.parse(inputField.value));
      obj.forEach((product)=>{
        let body = document.querySelector('.table tbody');
        let row = document.createElement('tr');
        body.appendChild(row);
        let image = product['img'];
        let name = product['name'];
        let price = product['price'];
        let decFactor = product['decFactor']
  
        let createfirstColumn = document.createElement('td');
        let createsecondColumn = document.createElement('td');
        let createthirdColumn = document.createElement('td');
        let createfourthColumn = document.createElement('td');
        let createfifthhColumn = document.createElement('td')
  
        let secondColumnChild = document.createElement('p');
        let thirdColumnChild = document.createElement('p');
        let fourthColumnChild = document.createElement('p');
        createfifthhColumn.innerHTML = '<input type="checkbox">'
        fourthColumnChild.innerHTML = Number(decFactor);
        thirdColumnChild.innerHTML = price;
        secondColumnChild.innerHTML = name;
        createfirstColumn.innerHTML = `<img src = "${image}">`
  
        createsecondColumn.appendChild(secondColumnChild);
        createthirdColumn.appendChild(thirdColumnChild);
        createfourthColumn.appendChild(fourthColumnChild);
        row.appendChild(createfirstColumn);
        row.appendChild(createsecondColumn);
        row.appendChild(createthirdColumn);
        row.appendChild(createfourthColumn);
        row.appendChild(createfifthhColumn);
        
      })
      //console.log(Array.from(document.querySelectorAll('.table input')))
      let buttonsEnableAll = Array.from(document.querySelectorAll('.table input'))
      buttonsEnableAll.map(el =>{
       el.addEventListener('click', function addToOutput() {
         debugger
          let productName=((el.parentNode).parentNode).querySelector('td:nth-child(2) > p').innerHTML
            let productPrice=((el.parentNode).parentNode).querySelector('td:nth-child(3) > p').innerHTML
            let productDecFactor=((el.parentNode).parentNode).querySelector('td:nth-child(4) > p').innerHTML
          if(el.checked){
            bougthProducts.push(productName);
            totalAmount+=Number(productPrice);
            decFactorSum+=Number(productDecFactor);
            console.log(decFactorSum)
          }
        })
      })
  })
  
  let buttonBuy=document.querySelector("#exercise > button:nth-child(6)")
                .addEventListener('click', function() {
                  let finalOutput = document.querySelector("#exercise > textarea:nth-child(5)")
                  let avgFactor = decFactorSum / bougthProducts.length;
                  finalOutput.innerHTML=`Bought furniture: ${bougthProducts.join(', ')}\nTotal price: ${totalAmount.toFixed(2)}\nAverage decoration factor: ${avgFactor.toFixed(2)}`
                })

}