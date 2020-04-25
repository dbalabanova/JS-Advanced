function solve() {
    let firstOkButtons = [1,2,3,4,5,6,7,8,9];
    let operators = ['+','-','/','x'];
    let pattern =  /([0-9\.]+) ([\*\/\-\+x]) ([0-9\.]+)/gm
    let shown='';
    let writing = document.getElementById('expressionOutput')

let finalOutput = document.getElementById('resultOutput');
finalOutput.innerHTML='';
let buttons = Array.from(document.querySelectorAll('.keys'))
            .map(x=>x.addEventListener('click', function calculations(e) {
                //debugger
               // console.log(e.target)
             if(e.target.value!=='='){
                 if(operators.includes(e.target.innerHTML)){
                shown+=` ${e.target.innerHTML} `;

                 } else {
                    shown+=e.target.innerHTML;
                 }
                writing.textContent=shown;
             } 
                else if(e.target.value==='='){
                    
                    if(!shown.match(pattern)){
                        finalOutput.innerHTML='NaN'
                      //  console.log('no');
                        
                    } else if (shown.match(pattern)){
                        let operator = shown.replace(/[0-9\. ]+/gm,'')
                        let numbers = shown.split(operator).map(Number)
                        if(operator==='+'){
                            finalOutput.innerHTML = numbers[0]+numbers[1];
                        } else if (operator==='-'){
                            finalOutput.innerHTML = numbers[0]-numbers[1];
                        }else if (operator==='/'){
                            finalOutput.innerHTML = numbers[0]/numbers[1];
                        }else if (operator==='x'){
                            finalOutput.innerHTML = numbers[0]*numbers[1];
                        }
                    }
                    
                }
            }))
            let clearButton=document.querySelector('#calculator button').addEventListener('click',function clear(){
                finalOutput.innerHTML="";
                writing.innerHTML=""
            })
//console.log(buttons);

}