import React from 'react';

class Screen extends React.Component {
    render(){
        return(
            <div className='screen'>
                <div className='window-buttons'>
                    <div className='window-button'>x</div>
                    <div className='window-button'>-</div>
                    <div className='window-button'>x</div>
                </div>
                <div className='calculation'>1.764 / 14</div>
                <div className='equal-sign'>=</div>
                <div className='result'>0.126</div>
            </div>
        )
    }
}

export default Screen;