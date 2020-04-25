function populations(array) {
let sth = array
        .map(x=>x.split(' <-> '));
        let obj = {}
        for (let i = 0; i < sth.length; i++) {
            let town = sth[i][0];
            let population = Number(sth[i][1]);
            if(typeof obj[town]==='undefined'){
                obj[town]=population;
            } else {
                obj[town]+=population
            }
            // console.log(town);
            // console.log(population);
            
            
        }
        let tuples = Object.entries (obj);
        for (let el of tuples) {
            let [currTown,currPopulation] = el;
            console.log(`${currTown} : ${currPopulation}`);
            
        }
  // console.log(tuples)
}
populations(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Washington <-> 10',
'Las Vegas <-> 1000000']
)
