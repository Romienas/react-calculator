import React from 'react';

class Buttons extends React.Component {
    render(){
        return(
            <div className='buttons'>
                <button className='button'>C</button>
                <button className='button bigger'>&plusmn;</button>
                <button className='button'>%</button>
                <button className='button white bigger'>&divide;</button>
                <button className='button'>7</button>
                <button className='button'>8</button>
                <button className='button'>9</button>
                <button className='button white bigger'>&times;</button>
                <button className='button'>4</button>
                <button className='button'>5</button>
                <button className='button'>6</button>
                <button className='button white bigger'>-</button>
                <button className='button'>1</button>
                <button className='button'>2</button>
                <button className='button'>3</button>
                <button className='button white bigger'>+</button>
                <button className='double-zero'>0</button>
                <button className='button'>,</button>
                <button className='button equal bigger'>=</button>
            </div>
        )
    }
}

export default Buttons;