function solve() {
    let output = [];
    //return {
       function add (vec1, vec2){
            output.push(vec1[0]+vec2[0]);
            output.push(vec1[1]+vec2[1]);
            return output
        }
        function multiply(vec, scalar){
            output.push(vec[0]*scalar);
            output.push(vec[1]*scalar);
            return output;
        }
        function length(vec){
             output.push(Math.sqrt((vec[0]*vec[0])+(vec[1]*vec[1])))
             return output[0]
            }
        function dot(vec1,vec2){
             output.push(vec1[0]*vec1[1]+vec2[0]*vec2[1])
             return output[0]
            }
        function cross(vec1,vec2){
             output.push(vec1[0]*vec2[1]-vec2[0]*vec1[1])
             return output[0]
            }
    //}
    return{
        add,
        multiply,
        length,
        dot,
        cross
    }
}
let result = solve()
console.log(result.add([1,1],[1,0]))
//console.log(result.dot([1,0],[0,-1]))
//console.log(result.cross([3,7],[1,0]))
//console.log(result.length([3,-4]))