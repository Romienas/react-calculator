import React from 'react';
import Buttons from './buttons';


class Calculator extends React.Component {
    render(){
        return (
            <div className='calculator'>
                <Buttons />
            </div>
        )
        }
}

export default Calculator;