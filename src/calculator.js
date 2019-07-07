import React from 'react';
import Buttons from './buttons';
import Screen from './screen';


class Calculator extends React.Component {
    render(){
        return (
            <div className='calculator'>
                <Screen />
                <Buttons />
            </div>
        )
        }
}

export default Calculator;