function epicness(arrayofObjects, array) {
    let all = {};
    let winsAndLoses = {};

    for (let obj of arrayofObjects) {
        let [kingdom, general, army] = Object.values(obj);
        army = Number(army)
        if (!all.hasOwnProperty(kingdom)) {
            all[kingdom] = {}
        }
        if (!all[kingdom].hasOwnProperty(general)) {
            all[kingdom][general] = 0;
        }
        all[kingdom][general] += army
    }
    //console.log(all);
    for (let fight of array) {
        let [firstKingdom, firstGeneral, secondKingdom, secondGeneral] = fight;

        if (firstKingdom !== secondKingdom && all[firstKingdom].hasOwnProperty(firstGeneral) &&
            all[secondKingdom].hasOwnProperty(secondGeneral)) {
            let firstGeneralArmy = all[firstKingdom][firstGeneral];
            let secondGeneralArmy = all[secondKingdom][secondGeneral];
            if (firstGeneralArmy > secondGeneralArmy) {
                firstGeneralArmy = Math.floor(firstGeneralArmy * 1.1);
                secondGeneralArmy = Math.floor(secondGeneralArmy * 0.9);
                if(!winsAndLoses.hasOwnProperty(firstKingdom)){
                    winsAndLoses[firstKingdom]={};
                    winsAndLoses[firstKingdom][wins]=0;
                    
                } if(!winsAndLoses.hasOwnProperty(secondKingdom)){
                    winsAndLoses[secondKingdom]={};
                    winsAndLoses[secondKingdom][loses]=0
                }
                
                winsAndLoses[firstKingdom][wins]++;
                winsAndLoses[secondKingdom][loses]++;

            } else if (firstGeneralArmy < secondGeneralArmy) {
                firstGeneralArmy = Math.floor(firstGeneralArmy * 0.9);
                secondGeneralArmy = Math.floor(secondGeneralArmy * 1.1);
                // if(!winsAndLoses.hasOwnProperty(firstKingdom)){
                //     winsAndLoses[firstKingdom]={};
                //     winsAndLoses[firstKingdom][loses]=0;
                // } if(!winsAndLoses.hasOwnProperty(secondKingdom)){
                //     winsAndLoses[secondKingdom]={};
                //     winsAndLoses[secondKingdom][wins]=0;
                // }
                // winsAndLoses[firstKingdom].loses++;
                // winsAndLoses[secondKingdom].wins++;

            }
            all[firstKingdom][firstGeneral] = firstGeneralArmy;
            all[secondKingdom][secondGeneral] = secondGeneralArmy;
        }

    }
    console.log(all);
    console.log(winsAndLoses);

}
epicness([
    { kingdom: 'Maiden Way', general: 'Merek', army: 5000 },
    { kingdom: 'Stonegate', general: 'Ulric', army: 4900 },
    { kingdom: 'Stonegate', general: 'Doran', army: 70000 },
    { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
    { kingdom: 'YorkenShire', general: 'Quinn', army: 2000 },
    { kingdom: 'Maiden Way', general: 'Berinon', army: 100000 }
], [
    ['YorkenShire', 'Quinn', 'Stonegate', 'Ulric'],
    ['Stonegate', 'Ulric', 'Stonegate', 'Doran'],
    ['Stonegate', 'Doran', 'Maiden Way', 'Merek'],
    ['Stonegate', 'Ulric', 'Maiden Way', 'Merek'],
    ['Maiden Way', 'Berinon', 'Stonegate', 'Ulric']
])
//   epicness([
//     { kingdom: 'Stonegate', general: 'Ulric', army: 5000 },
//     { kingdom: 'YorkenShire', general: 'Quinn', army: 5000 },
//     { kingdom: 'Maiden Way', general: 'Berinon', army: 1000 }
//   ] [
//     [ 'YorkenShire', 'Quinn', 'Stonegate', 'Ulric' ],
//     [ 'Maiden Way', 'Berinon', 'YorkenShire', 'Quinn' ]
//   ])
//   epicness([
//     { kingdom: 'Maiden Way', general: 'Merek', army: 5000 },
//     { kingdom: 'Stonegate', general: 'Ulric', army: 4900 },
//     { kingdom: 'Stonegate', general: 'Doran', army: 70000 },
//     { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
//     { kingdom: 'YorkenShire', general: 'Quinn', army: 2000 }
//   ] [
//     [ 'YorkenShire', 'Quinn', 'Stonegate', 'Doran' ],
//     [ 'Stonegate', 'Ulric', 'Maiden Way', 'Merek' ]
//   ])