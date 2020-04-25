class Organization {
  constructor(name, budget) {
    (this.name = name),
      (this.budget = Number(budget)),
      (this.employees = []),
      (this.departments = {
        marketing: 0.4 * this.budget,
        finance: 0.25 * this.budget,
        production: 0.35 * this.budget
      });
  }
  get departmentsBudget() {
    return {
      marketing: this.departments["marketing"],
      finance: this.departments["finance"],
      production: this.departments["production"]
    };
    //return this.departments
  }

  add(employeeName, department, salary) {
    debugger;
    if (this.departments.hasOwnProperty(department)) {
      if (this.departments[department] >= salary) {
        let obj = {
          employeeName,
          department,
          salary
        };
        this.employees.push(obj);
        this.departments[department] -= salary;
        return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
      } else {
        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`;
      }
    }
  }

  employeeExists(employeeName) {
    debugger;
    let organizationName = this.name;
    for (let key in this.employees) {
      if (this.employees[key]["employeeName"] === employeeName) {
        return `Mr./Mrs. ${employeeName} is part of the ${
          this.employees[key]["department"]
        } department.`;
      }
      return `Mr./Mrs. ${employeeName} is not working in ${organizationName}.`;
    }
  }

  leaveOrganization(employeeName) {
    debugger;
    let organizationName = this.name;
    for (let key in this.employees) {
      if (this.employees[key]["employeeName"] === employeeName) {
        let index = this.employees.indexOf(this.employees[key]);
        this.employees.splice(index, 1);
        // let currentDepartment = this.employees[key]["department"];
        this.departments[department] += this.employees[key]["salary"];
        return `It was pleasure for ${organizationName} to work with Mr./Mrs. ${employeeName}`;
      }
      return `Mr./Mrs. ${employeeName} is not working in ${organizationName}.`;
    }
  }

  // status() {
  //   let output = "";
  //   let marketingEmployees = [];
  //   let marketingSorted = [];
  //   let financeEmployees = [];
  //   let financeSorted = [];
  //   let productionSorted = [];
  //   let productionEmployees = [];

  //   for (let key in this.employees) {
      
  //     if (this.employees[key]["department"] === "marketing") {
  //       let keyValue = Object.values(this.employees[key]);
  //       marketingSorted.push(keyValue);
  //     }
  //   }
  //   let sortedMarketing = marketingSorted.sort((a, b) => b[2] - a[2]);
  //   for (let person of sortedMarketing) {
  //     let[emplName,sector,money]=person;
  //     marketingEmployees.push(emplName)
  //   }

  //   for (let key in this.employees) {
      
  //     if (this.employees[key]["department"] === "finance") {
  //       let keyValue = Object.values(this.employees[key]);
  //       financeSorted.push(keyValue);
  //     }
  //   }
  //   let sortedFinance = financeSorted.sort((a, b) => b[2] - a[2]);
  //   for (let person of sortedFinance) {
  //     let[emplName,sector,money]=person;
  //     financeEmployees.push(emplName)
  //   }


  //   for (let key in this.employees) {
      
  //     if (this.employees[key]["department"] === "production") {
  //       let keyValue = Object.values(this.employees[key]);
  //       productionSorted.push(keyValue);
  //     }
  //   }
  //   let sortedProduction = productionSorted.sort((a, b) => b[2] - a[2]);
  //   for (let person of sortedProduction) {
  //     let[emplName,sector,money]=person;
  //     productionEmployees.push(emplName)
  //   }

  //   output += `${this.name.toUpperCase()} DEPARTMENTS:\n`;
  //   output += `Marketing | Employees: ${marketingEmployees.join(", ")} |`;
  //   output += `Remaining Budget: ${this.departments["marketing"]}`;

  //   output += `\nFinance| Employees: ${financeEmployees.join(", ")} |`;
  //   output += `Remaining Budget: ${this.departments["finance"]}`;

  //   output += `\nProduction| Employees: ${productionEmployees.join(", ")} |`;
  //   output += `Remaining Budget: ${this.departments["production"]}`;
  //   return output;
  // }

  status() {
    let result = `${this.name.toUpperCase()} DEPARTMENTS:`;
    result += `\n${output('marketing', this.employees, this.departments)}`;
    result += `\n${output('finance', this.employees, this.departments)}`;
    result += `\n${output('production', this.employees, this.departments)}`;

    return result;

    function output(department, employees, departments) {
        return `${department.charAt(0).toUpperCase() + department.slice(1)} | Employees: ${employees
            .filter(x => x.department === `${department}`).length}: ${employees
            .filter(x => x.department === `${department}`)
            .sort((a, b) => b.salary - a.salary)
            .map(e => e.employeeName)
            .join(', ')} | Remaining Budget: ${departments[`${department}`]}`;
    }
}
}

// let organization = new Organization("SoftUni", 20000);
// console.log(organization.departmentsBudget);
// console.log(organization.add("Peter", "marketing", 1200));
// console.log(organization.add("Deni", "marketing", 2000));
// console.log(organization.add("Robert", "production", 2000));
// console.log(organization.employeeExists("Alibbab"));
// //console.log(organization.leaveOrganization('Peter'));
// console.log(organization.leaveOrganization("Deni"));
// console.log(organization.status());

let organization = new Organization('SBTech', 1000);

console.log(organization.add('Peter', 'marketing', 800));
console.log(organization.add('Robert', 'production', 2000));
console.log(organization.add('Peter', 'production', 2000));

