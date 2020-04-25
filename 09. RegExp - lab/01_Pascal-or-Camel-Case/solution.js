function solve() {
  //debugger
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let output = ''
  if (namingConvention === 'Pascal Case') {
    let output = text
      .toLocaleLowerCase()
      .split(' ')
      .map(x => {
        x = x[0].toUpperCase() + x.slice(1, x.length)
        return x
      })
      .join('')
    result.innerHTML = output
  } else if (namingConvention === 'Camel Case') {
    let output = text
        .toLocaleLowerCase()
        .split(' ')
        .map((x,i)=>{
          if(i!==0){
            x=x[0].toLocaleUpperCase()+x.slice(1,x.length)
          }
          return x
        })
        .join('');
        result.innerHTML=output
  } else {
    result.innerHTML = 'Error!'
  }

}