function solve(array) {
    let speed = array[0];
    let place = array[1];
let limits = {
    'residential': 20,
    'city': 50,
    'interstate': 90,
    'motorway': 130,
}
if(speed < limits[place]){
    console.log('');
} else if (speed -limits[place] >0 && speed -limits[place]<=20){
    console.log('speeding');
}else if (speed -limits[place]>20 && speed -limits[place]<=40){
    console.log('excessive speeding');
} else if (speed -limits[place]>40) {
    console.log('reckless driving');
}
}
 solve([21, 'residential']);
 solve([40, 'city']);
 solve([120, 'interstate']);
 solve([200, 'motorway']);