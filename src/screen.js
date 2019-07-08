import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faExpandArrowsAlt, 
    faWindowMinimize, 
    faTimes 
} from '@fortawesome/free-solid-svg-icons';

class Screen extends React.Component {
    render(){
        return(
            <div className='screen'>
                <div className='window-buttons'>
                    <div className='window-button'>
                        <FontAwesomeIcon className='fa-font' icon={faTimes} />
                    </div>
                    <div className='window-button'>
                        <FontAwesomeIcon className='fa-font' icon={faWindowMinimize} />
                    </div>
                    <div className='window-button'>
                        <FontAwesomeIcon className='fa-font' icon={faExpandArrowsAlt} />
                    </div>
                </div>
                <div className='calculation'>1.764 / 14</div>
                <div className='equal-sign'>=</div>
                <div className='result'>0.126</div>
            </div>
        )
    }
}

export default Screen;