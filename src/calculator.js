import React from 'react';
import Screen from './screen';

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            operator: '',
            number: 0
        }

        this.pressNumberButton = this.pressNumberButton.bind(this);
    }

    pressNumberButton(e){
        let numberStr = this.state.number + e.target.value;
        let numberInt = parseFloat(numberStr);
        console.log(numberStr)
        this.setState({
                number: numberInt
        })
        console.log('antras ' + this.state.number)
    }

    render(){
        return(
            <div className='calculator'>
                <Screen
                    pressNumber={this.state.number}
                />
                <div className='buttons'>
                    <button className='button'>C</button>
                    <button className='button bigger'>&plusmn;</button>
                    <button className='button'>%</button>
                    <button className='button white bigger'>&divide;</button>
                    <button className='button' value='7' onClick={this.pressNumberButton}>7</button>
                    <button className='button' value='8' onClick={this.pressNumberButton}>8</button>
                    <button className='button' value='9' onClick={this.pressNumberButton}>9</button>
                    <button className='button white bigger'>&times;</button>
                    <button className='button' value='4' onClick={this.pressNumberButton}>4</button>
                    <button className='button' value='5' onClick={this.pressNumberButton}>5</button>
                    <button className='button' value='6' onClick={this.pressNumberButton}>6</button>
                    <button className='button white bigger'>-</button>
                    <button className='button' value='1' onClick={this.pressNumberButton}>1</button>
                    <button className='button' value='2' onClick={this.pressNumberButton}>2</button>
                    <button className='button' value='3' onClick={this.pressNumberButton}>3</button>
                    <button className='button white bigger'>+</button>
                    <button className='double-zero' value='0' onClick={this.pressNumberButton}>0</button>
                    <button className='button' value='.' onClick={this.pressNumberButton}>,</button>
                    <button className='button equal bigger'>=</button>
                </div>
            </div>
        )
    }
}

export default Calculator; 