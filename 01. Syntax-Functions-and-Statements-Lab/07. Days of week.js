function solve(day) {
    let result;
let week = {
    'Monday':1,
    'Tuesday':2,
    'Wednesday':3,
    'Thursday':4,
    'Friday':5,
    'Saturday':6,
    'Sunday':7
}
if(week[day]){
    result = week[day]

} else {
    result = 'error'
}
console.log(result);

}
solve ('Monday');
solve ('Monda');