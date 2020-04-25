function components(array) {
    let systems = {};
    for (let line of array) {
        let [system,component,subcomponent]=line.split(' | ');
        if(!systems.hasOwnProperty(system)){
            systems[system]={};
        }
        if(!systems[system].hasOwnProperty(component)){
            systems[system][component]=[];
            systems[system][component].push(subcomponent);
        } else {
            systems[system][component].push(subcomponent);
        }
    }
     let allSystems = Object.entries(systems).sort((a,b)=>Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])).forEach((el)=>{
        console.log(el[0]);
        Object.entries(el[1]).sort((a,b)=>b[1].length-a[1].length).forEach((e)=>{
            console.log(`|||${e[0]}`);
            e[1].forEach((syb)=>{
                console.log(`||||||${syb}`);
            })
        })
     });
}
components(['SULS | Main Site | Home Page',
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