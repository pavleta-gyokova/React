import React, { Component } from 'react';
import QuizType from './QuizType.js';



class QuizBar extends Component {
    
    render() {
        const quizArray = 
            [{icon: 'dice',type: 'Random'},
            {icon: 'file-alt',type: 'Regular'},
            {icon: 'dumbbell',type: 'Weighted'},
            {icon: 'font',type: 'Multi'}];


        const quizType = quizArray.map((qt,i)=>{
            return(
                <QuizType key={i} icon={qt.icon} quizType={qt.type} userChoice={this.props.userChoice}/>
            )
        })
        return (
            <div className='quiz-bar'>
                <h1>Choose your study type</h1>
                <ul className='nav nav-pills nav-fill' userChoice={this.props.userChoice}>
                {quizType}
                </ul>
            </div>
        )
    }
}

export default QuizBar;