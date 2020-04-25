class Rectangle {
    constructor (width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    calcArea(){
        return this.width*this.height
    }
}
let rectangle1 = new Rectangle(8,2,'red');
console.log(rectangle1.width);
console.log(rectangle1.height);
console.log(rectangle1.color);
console.log(rectangle1.calcArea())