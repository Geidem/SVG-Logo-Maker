const {Circle, Square, Triangle} = require('./shapes');

// Test the Circle constructor
describe('Circle', () => {
    test('Renders a circle', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="300" width="100%" fill="blue" />')

    });
});

// Test the Square constructor
describe('Square', () => {
    test('Renders a square', () => {
        const shape = new Square();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="green" />')
    });
});
// Test the Triangle constructor
describe('Triangle', () => {
    test('Renders a triangle', () => {
        const shape = new Triangle();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual('<polygon points="50%,0 0,100% 100%,100%" fill="red" />')
    });
});