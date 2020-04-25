
function solve(input, condition){
    function filterByProp(prop,value,element){
        return element[prop]===value
    }
     function splitParams(condition) {
         return condition.split('-')
     }
    
     function format(el,i){
         return `${i}. ${el.first_name} ${el.last_name} - ${el.email}`
     }
    return condition==='all'
    ?  JSON.parse(input)
            .map(format)
            .join('\n')
    : JSON.parse(input)
            .filter(filterByProp.bind(undefined,...splitParams(condition)))
            .map(format)
            .join('\n')
    
}


console.log(solve (`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'))
