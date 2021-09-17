import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell,faFont,faFileAlt,faDice } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';


library.add(faDumbbell);
library.add(faFont);
library.add(faFileAlt);
library.add(faDice);

class QuizType extends Component {
    render() {
        return (
            <li className='col-sm-3 text-center'>
                <div className='nav-card' onClick={()=>this.props.userChoice(this.props.quizType)}>
                    <FontAwesomeIcon icon={this.props.icon} size='4x'/>
                    <span>{this.props.quizType}</span>
                </div>
            </li>
        )
    }
}

export default QuizType;