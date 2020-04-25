function create(words) {
   const initialDiv = document.getElementById('content');
   words.forEach((el) => {
      let createDivElement = document.createElement('div');
      let createDivContent = document.createElement('p');
      createDivContent.innerHTML = el;
      createDivContent.style.display = 'none'
      createDivElement.appendChild(createDivContent);
      createDivElement.addEventListener('click', function appear() {
         createDivContent.style.display = 'block'

      })
      initialDiv.appendChild(createDivElement);

   })

}