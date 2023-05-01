class Shape {
    constructor() {
        this.color=''
    }
    setColor(color) {
        this.color = (color);
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="300" width="100%" fill="${this.color}" />`
    }
}
class Square extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<rect width="100%" height="100%" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<polygon points="50%,0 0,100% 100%,100%" fill="${this.color}" />`
    }
};

module.exports = {Circle, Square, Triangle};