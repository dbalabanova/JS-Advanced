function arena(array) {
    let pool = {};
    let gladiators = {};
    for (let line of array) {
        if (line !== 'Ave Cesar') {
            if (line.includes(' -> ')) {
                let [gladiator, technique, skill] = line.split(' -> ');
                skill = Number(skill)
                if (!pool.hasOwnProperty(gladiator)) {
                    pool[gladiator] = {};
                }
                if (!pool[gladiator][technique]) {
                    pool[gladiator][technique] = skill
                } else {
                    if (pool[gladiator][technique] < skill) {
                        pool[gladiator][technique] = skill;
                    }
                }
            } else {
                let [firstGladiator, secondGladiator] = line.split(' vs ');
                if (pool.hasOwnProperty(firstGladiator) && pool.hasOwnProperty(secondGladiator)) {
                    let firstTechniques = Object.keys(pool[firstGladiator]);
                    let secondTechniques = Object.keys(pool[secondGladiator]);
                    let fisrtScores = Object.values(pool[firstGladiator]).reduce((a, b) => a + b, 0);
                    let secondScores = Object.values(pool[secondGladiator]).reduce((a, b) => a + b, 0);
                    for (let i = 0; i < firstTechniques.length; i++) {
                        let currentTech = firstTechniques[i];
                        for (let j = 0; j < secondTechniques.length; j++) {
                            if (secondTechniques[j] === currentTech) {
                                if (fisrtScores > secondScores) {
                                    delete pool[secondGladiator];
                                } else if (fisrtScores < secondScores) {
                                    delete pool[firstGladiator];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let firstEntries = Object.entries(pool);
    for (let glad of firstEntries) {
        let [name, objName] = glad;
        let totalScore = Object.values(objName).reduce((a, b) => a + b, 0);
        gladiators[name] = totalScore;
    }
    let sortedGladiators = Object.entries(gladiators).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    });
    for (let log of sortedGladiators) {
        let [a, b] = log
        console.log(`${a}: ${b} skill`);
        let currentSkills = pool[a];
        let sortedEntries = Object.entries(currentSkills)
            .sort((a, b) => {
                return b[1] - a[1] || a[0].localeCompare(b[0])
            });
        for (let last of sortedEntries) {
            let [skill, points] = last;
            console.log(`- ${skill} <!> ${points}`)
        }
    }
}
// arena([
//     'Pesho -> BattleCry -> 400',
//     'Gosho -> PowerPunch -> 300',
//     'Stamat -> Duck -> 200',
//     'Stamat -> Tiger -> 250',
//     'Stamat -> PowerPunch -> 260',
//     'Stamat vs Gosho',
//     'Ave Cesar'
// ])
arena([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
])