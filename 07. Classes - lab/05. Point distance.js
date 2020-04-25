class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(firstPoint,secondPoint){
        let x1=firstPoint.x;
        let y1=firstPoint.y;
        let x2=secondPoint.x;
        let y2=secondPoint.y;
        let first = x2-x1;
        let second = y2-y1;
        return Math.sqrt(first**2+second**2)
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
