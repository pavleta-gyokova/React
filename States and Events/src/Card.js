import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="card hoverable small">
                <div className="card-image">
                    <img src={this.props.card.image} />
                </div>
                <div className="card-content">
                    <p>{this.props.card.course}</p>
                    <p>{this.props.card.instructor}</p>
                </div>
                <div className="card-action">
                    <a href="#">$9.99</a>
                </div>
            </div>
        )
    }
}

export default Card;