 let result = (()=> {
    let output = [];
    return {
        add: (vec1, vec2)=>{
            output.push(vec1[0]+vec2[0]);
            output.push(vec1[1]+vec2[1]);
            return output
        },
        multiply:(vec, scalar)=>{
            output.push(vec[0]*scalar);
            output.push(vec[1]*scalar);
            return output;
        },
        length: (vec)=>{
            output.push(Math.sqrt(vec[0]*vec[0]+vec[1]*vec[1]))
            return output[0];

        },
        dot: (vec1,vec2)=>{
            output.push(vec1[0]*vec1[1]+vec2[0]*vec2[1])
            return output[0];

        },
        cross:(vec1,vec2)=>{
            output.push(vec1[0]*vec2[1]-vec2[0]*vec1[1])
            return output[0];

        }
    }
    
})()
//et result = solve()
//console.log(result.add([1,1],[1,0]))
//console.log(result.dot([1,0],[0,-1]))
//console.log(result.cross([3,7],[1,0]))
console.log(result.length([3,-4]))