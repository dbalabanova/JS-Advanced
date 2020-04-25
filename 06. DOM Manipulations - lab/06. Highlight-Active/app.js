function focus() {
    const fields = Array.from(document.querySelectorAll('body > div > div'))
     fields.map(x => {x.addEventListener('focus', function color(e){
         debugger
            e.className="focus";
            console.log(e);
            x.addEventListener('blur', function notColored(e){
                debugger
                e.className='';
            })
        })

        })
    // const field = (document.querySelector('body > div > div'))
    // //debugger
    // console.log(field)
    //      field.addEventListener('focus', (event)=>{
    //          event.className ="focus"
    //          console.log(event)
    //  })

     // })

}