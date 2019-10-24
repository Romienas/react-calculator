import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faExpandArrowsAlt, 
    faWindowMinimize, 
    faTimes 
} from '@fortawesome/free-solid-svg-icons';

class Screen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: this.props.pressNumber,
            operator: '',
            equal: 0
        }
    }
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

                <div className='calculation'>
                    {this.props.pressNumber}
                </div>

                <div className='equal-sign'>=</div>
                <div className='result'>{this.state.equal}</div>
            </div>
        )
    }
}

export default Screen;