function unique(array) {
    let uniqueArr = []
    let nestedArrays = array.map(JSON.parse);
    for (let arr of nestedArrays) {
        let sum = arr.reduce((a, b) => a + b, 0);
        let containSum = uniqueArr.some((x) => x.reduce((a, b) => a + b, 0) === sum)
        if (!containSum) {
            uniqueArr.push(arr.sort((a,b)=>b-a))
        }
    }
    let result = uniqueArr.sort((a,b)=>a.length-b.length)
    .map((arr)=> `[${arr.join(', ')}]`)
    .join('\n')
    console.log(result);

}
unique(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"]
)