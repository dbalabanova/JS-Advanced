class Computer {
  constructor(ramMemory, cpuGHz, hddMemory) {
    this.ramMemory = Number(ramMemory),
      this.cpuGHz = Number(cpuGHz),
      this.hddMemory = Number(hddMemory),
      this.taskManager = [],
      this.installedPrograms = []
      this.totalRam=0;
      this.totalCpu=0;
  }
  installAProgram(name, requiredSpace) {
    requiredSpace = Number(requiredSpace);
    if (Number(requiredSpace) <= this.hddMemory) {
      let obj = {
        name,
        requiredSpace
      };
      this.installedPrograms.push(obj);
      this.hddMemory -= Number(requiredSpace);
      return obj;
    } else {
      throw new Error("There is not enough space on the hard drive");
    }
  }
  uninstallAProgram(name) {
    let program = this.installedPrograms.find(s => s.name === name);
    if (program) {
      let index = this.installedPrograms.indexOf(program);
      let removed = this.installedPrograms.splice(index, 1);
      this.hddMemory += program.requiredSpace;
      return this.installedPrograms;
    } else {
      throw new Error("Control panel is not responding");
    }
  }
  openAProgram(name) {
    let program = this.installedPrograms.find(s => s.name === name);
    if (!program) {
      throw new Error(`The ${name} is not recognized`);
    } else {
        let alreadyOpen=this.taskManager.find(s=>s.name===name)
        if(alreadyOpen){
            throw new Error(`The ${name} is already open`)
        }
      let programSpace = Number(program.requiredSpace);
      let programRam = (programSpace / this.ramMemory) * 1.5;
      let programCPU = ((programSpace / this.cpuGHz) / 500) * 1.5;
        this.totalRam+=programRam
        this.totalCpu+=programCPU;
      if (this.totalRam >= 100) {
        throw new Error(`${name} caused out of memory exception`);
      }
      else if (this.totalCpu >= 100) {
        throw new Error(`${name} caused out of cpu exception`);
      }
      if (this.totalRam< 100 && this.totalCpu < 100) {
          let obj={
              name,
              ramUsage: programRam,
              cpuUsage: programCPU
          }
          this.taskManager.push(obj);
          return obj;
      }
    }
  }
  taskManagerView(){
      if(this.taskManager.length===0){
          return "All running smooth so far"
      } else {
          let output=''
          this.taskManager.forEach((e)=>{
              let programName=e.name;
              let cpuUsage = e.cpuUsage;
              let ramUsage=e.ramUsage;
            output+=`Name - ${programName} | Usage - CPU: ${cpuUsage.toFixed(0)}%, RAM: ${ramUsage.toFixed(0)}%\n`
        })
        return output.trim()

      }
  }
}
// let computer = new Computer(4096, 7.5, 250000);

// console.log(computer.installAProgram("Word", 7300));
// console.log(computer.installAProgram("Excel", 10240));
// console.log(computer.installAProgram("PowerPoint", 12288));
// console.log(computer.uninstallAProgram("Word"));
// console.log(computer.installAProgram("Solitare", 1500));

// console.log(computer.openAProgram('Excel'));
// console.log(computer.openAProgram('Solitare'));

// console.log(computer.installedPrograms);
// console.log(('-').repeat(50)) // Separator
// console.log(computer.taskManagerView());

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());

