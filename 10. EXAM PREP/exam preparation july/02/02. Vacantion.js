class Vacation {
  constructor(organizer, destination, budget) {
    (this.organizer = organizer),
      (this.destination = destination),
      (this.budget = Number(budget)),
      (this.kids = {});
  }

  get numberOfChildren() {
    this._numberOfChildren = 0;
    for (let g in this.kids) {
      this._numberOfChildren += this.kids[g].length;
    }
    return this._numberOfChildren;
  }
  registerChild(name, grade, budget) {
    if (budget < this.budget) {
      return `${name}'s money is not enough to go on vacation to ${this.destination}`;
    }
    // let ifGrade = this.kids.find(g=>g.hasOwnProperty(grade));
    if (!this.kids.hasOwnProperty(grade)) {
      this.kids[grade] = [];
    }
    if (this.kids[grade].includes(`${name}-${budget}`)) {
      return `${name} is already in the list for this ${this.destination} vacation.`;
    }
    this.kids[grade].push(`${name}-${budget}`);
    // this.numberOfChildren++;
    return this.kids[grade];
  }

  removeChild(name, grade) {
    let ifExsists = false;

    if (this.kids[grade]) {
      let currGrade = this.kids[grade];
      //console.log(currGrade);
      for (let student of currGrade) {
        let [studName, studBudget] = student.split("-");
        if (studName === name) {
          ifExsists = true;
          let index = this.kids[grade].indexOf(`${studName}-${studBudget}`);
          this.kids[grade].splice(index, 1);
        }
      }
      //this.numberOfChildren--;
      return this.kids[grade];
    }
    if (ifExsists === false || !this.kids.hasOwnProperty(grade)) {
      return `We couldn't find ${name} in ${grade} grade.`;
    }
  }
  toString() {
    if (Object.keys(this.kids).length === 0) {
      return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
    }
    let outout = "";
    //let numberOfChildren = Object.values(this.kids).length;
    // console.log(this.numberOfChildren)
    outout += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
    let sorted = Object.entries(this.kids)
      .sort((a, b) => a[0] - b[0])
      .forEach(clas => {
        let [currentGrade, students] = clas;
        //console.log(students)
        outout += `Grade: ${currentGrade}\n`;
        let currentKidNumber = 1;

        students.forEach(kid => {
          //let [kid, kidBudg] = k.split("-");
          outout += `${currentKidNumber}. ${kid}\n`;
          currentKidNumber++;
        });
        //outout+=`\n`
      });
    return outout;
  }
}

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));

// console.log(vacation.removeChild('Gosho', 9));

// console.log(vacation.registerChild('Pesho', 6, 2400))
// console.log(vacation.registerChild('Gosho', 5, 2000))

// console.log(vacation.removeChild('Lilly', 6))
// console.log(vacation.registerChild('Tanya', 5, 6000))

let vacation = new Vacation("Miss Elizabeth", "Dubai", 2000);
vacation.registerChild("Gosho", 5, 3000);
vacation.registerChild("Lilly", 6, 1500);
vacation.registerChild("Pesho", 7, 4000);
vacation.registerChild("Tanya", 5, 5000);
vacation.registerChild("Mitko", 10, 5500);
console.log(vacation.toString());
