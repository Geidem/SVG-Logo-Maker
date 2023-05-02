const inquirer = require("inquirer");
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');


class Svg{
    constructor() {
        this.textElement=''
        this.shapeElement=''
    }
    render() {
        return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">' + this.shapeElement + this.textElement + '</svg>'
    }
setTextelement(text,color){
    this.textElement = `<text x="150" y="125" font-size="60" fill="${color}" dominant-baseline="middle" text-anchor="middle">${text}</text>`
    }
setShapeelement(shape,color){
    if (shape === 'Circle'){
        const circle = new Circle();
        circle.setColor(color);
        this.shapeElement = circle.render();
    } else if (shape === 'Square'){
        const square = new Square();
        square.setColor(color);
        this.shapeElement = square.render();
    } else if (shape === 'Triangle'){
        const triangle = new Triangle();
        triangle.setColor(color);
        this.shapeElement = triangle.render();
    }
    }
}

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'TEXT : Enter up to (3) characters:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Please enter color keyword or hexadecimel number for text."
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter color keyword or hexadecimel number for shape.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape.',
        choices: ['Circle', 'Square', 'Triangle']
    },


];

return inquirer.prompt(questions)
    .then(answers => {
        const svg = new Svg();
        svg.setTextelement(answers.text, answers.textColor);
        svg.setShapeelement(answers.shape, answers.shapeColor);
        fs.writeFile('./examples/logo.svg', svg.render(), function (err) {
            if (err) throw err;
            console.log('Generated logo.svg');
        });
    });

