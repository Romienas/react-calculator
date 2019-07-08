import React from 'react';

class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.pressOne = this.pressOne.bind(this);
        this.pressTwo = this.pressTwo.bind(this);
        this.pressThree = this.pressThree.bind(this);
        this.pressFour = this.pressFour.bind(this);
        this.pressFive = this.pressFive.bind(this);
        this.pressSix = this.pressSix.bind(this);
        this.pressSeven = this.pressSeven.bind(this);
        this.pressEight = this.pressEight.bind(this);
        this.pressNine = this.pressNine.bind(this);
        this.pressZero = this.pressZero.bind(this);
    }

    pressOne(){
        let number = 1;
        console.log(number);
    }

    pressTwo(){
        let number = 2;
        console.log(number);
    }

    pressThree(){
        let number = 3;
        console.log(number);
    }

    pressFour(){
        let number = 4;
        console.log(number);
    }

    pressFive(){
        let number = 5;
        console.log(number);
    }

    pressSix(){
        let number = 6;
        console.log(number);
    }

    pressSeven(){
        let number = 7;
        console.log(number);
    }

    pressEight(){
        let number = 8;
        console.log(number);
    }

    pressNine(){
        let number = 9;
        console.log(number);
    }

    pressZero(){
        let number = 0;
        console.log(number);
    }

    render(){
        return(
            <div className='buttons'>
                <button className='button'>C</button>
                <button className='button bigger'>&plusmn;</button>
                <button className='button'>%</button>
                <button className='button white bigger'>&divide;</button>
                <button className='button' onClick={this.pressSeven}>7</button>
                <button className='button' onClick={this.pressEight}>8</button>
                <button className='button' onClick={this.pressNine}>9</button>
                <button className='button white bigger'>&times;</button>
                <button className='button' onClick={this.pressFour}>4</button>
                <button className='button' onClick={this.pressFive}>5</button>
                <button className='button' onClick={this.pressSix}>6</button>
                <button className='button white bigger'>-</button>
                <button className='button' onClick={this.pressOne}>1</button>
                <button className='button' onClick={this.pressTwo}>2</button>
                <button className='button' onClick={this.pressThree}>3</button>
                <button className='button white bigger'>+</button>
                <button className='double-zero' onClick={this.pressZero}>0</button>
                <button className='button'>,</button>
                <button className='button equal bigger'>=</button>
            </div>
        )
    }
}

export default Buttons;