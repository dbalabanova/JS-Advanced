system = (arr) => {
    const result = {};
 
    arr.forEach(elem => {
        const [system, component, sub] = elem.split(' | ');
        if (!result.hasOwnProperty(system)) {
            result[system] = {
                [component]: [sub]
            }
        } else {
            if (result[system].hasOwnProperty(component)) {
                result[system][component].push(sub)
            } else {
                result[system][component] = [sub]
            }
        }
    })
    let sth=Object.entries(result)
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]));
    console.log(sth);
    
    //.forEach(e => {
    //     console.log(e[0])
    //     Object.entries(e[1]).sort((a, b) => b[1].length - a[1].length).forEach(e => {
    //         console.log(`|||${e[0]}`)
    //         e[1].forEach(e => {
    //             console.log(`||||||${e}`)
    //         })
    //     })
    // })
   // console.log(result);
    
}
system(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)