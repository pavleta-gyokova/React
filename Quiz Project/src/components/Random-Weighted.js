import React, { Component } from 'react';

class RandomWeighted extends Component {

    render() {
        const question = this.props.questionData;
        return (
            <div>
                <div className='card-back'>
                    <div>
                        {question.service}
                    </div>
                    <div className="commonality">
                        {question.common}
                    </div>
                </div>
                <div className='card-front'>
                    <div>
                        {question.cat}
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomWeighted;