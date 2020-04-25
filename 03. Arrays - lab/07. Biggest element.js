function biggest(array) {
    let biggestElement=Math.max(...array.flat())
    console.log(biggestElement)
    }
    biggest([[20, 50, 10],
        [8, 33, 145]]
       )