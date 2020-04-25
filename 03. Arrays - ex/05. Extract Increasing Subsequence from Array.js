function extract(array) {
    let result = array.reduce((acc, curr, index, arr) => {
        debugger
        if (curr >= Math.max(...acc)) {
            acc.push(curr)
        }
        return acc;
    }, []);

    return result.join('\n')
}
console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))