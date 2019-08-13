class Rectangle {
    constructor(props) {
        this.width = props.width;
        this.height = props.height;
    }
    function getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(props) {
        super({width: props.width, height: props.height });
    }
}