function solve(name,age,weight,height){
    function bodyMass(w,h){
        let bmi = (w/((h/100)**2));
        return bmi;
    }
    function state(num){
        if (num<18.5){
            return 'underweight'
        }else if (num>=18.5 &&num<25){
            return 'normal'
        }else if (num>=25 &&num<30){
            return 'overweight'
        }else if (num>=30 ){
            return 'obese'
        }
    }
   
    let obj = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: Math.round(bodyMass(weight,height)),
        status: state(bodyMass(weight,height))
    };
  if (obj['status']==='obese') obj['recommendation']='admission required' 
  return obj

}
console.log(solve('Peter', 29, 75, 182))