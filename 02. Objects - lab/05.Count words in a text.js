function countWords(array) {
let obj={};
let words = array[0]
.match(/\w+/gim)
for (let i = 0; i < words.length; i++) {
    if(!obj[words[i]]){
        obj[words[i]]=0;
    }
    obj[words[i]]++;
}
console.log(JSON.stringify(obj));

}
countWords(["Far too slow, you're far too slow."]);
countWords(['JS devs use Node.js for server-side JS.-- JS for devs'])

//CHAOV CASE
function solve(array) {
let str = array[0];

return str
        .match(/\w+/gim)
        .reduce((a,b)=> {
            if(typeof a[b]==='undefined'){
                a[b]=0;
            }
            a[b]++;
            return a;
        }, {});
}
console.log(solve(["Far too slow, you're far too slow."]));
