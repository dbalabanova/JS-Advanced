function solve() {
   document.getElementById('searchBtn')
   .addEventListener('click', function search(){
      let input = document.getElementById('searchField').value;
      let rows = document.querySelectorAll("body > table > tbody > tr > td")
      let rowsInfo = rows.innerHTML
      for (let i = 0; i < rows.length; i++) {
         let element = rows[i].innerHTML;
         if(element.includes(input)){
            rows[i].parentElement.className='select'
         }
//console.log(element);
         
      }
input.value='';
   })
}