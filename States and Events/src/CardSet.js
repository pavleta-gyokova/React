import React, { Component } from 'react';
import Card from './Card.js';

class CardSet extends Component {
    constructor() {
        super()
        this.state = {
            chosenCards: []
        }
    }

    saveCourse = (index) => {
        const copyOfCards = [...this.state.chosenCards];
        copyOfCards.push(this.props.cards[index]);
        let setOfCards = [...new Set(copyOfCards)];
        let uniqueCards = Array.from(setOfCards);
        this.setState({
            chosenCards: uniqueCards
        })
    }

    deleteCourse = (index) =>{
        const copyOfCards = [...this.state.chosenCards];
        const cardIndex = copyOfCards.indexOf(this.props.cards[index])
        copyOfCards.splice(cardIndex,1);
        this.setState({
            chosenCards: copyOfCards
        })
    }
    render() {
        const savedCards = this.state.chosenCards.map((card, i) => {
            return <h3 key={i}>{card.course}</h3>
        })
        const cardList = this.props.cards.map((card, i) => {
            return (
                <div className="col s2" key={i}>
                    < Card card={card} />
                    <button onClick={() => this.saveCourse(i)} className="btn waves-light waves-effect">Save</button>
                    <button onClick={()=> this.deleteCourse(i)} className='btn waves-light waves-effect'>Delete</button>
                </div>
            )
        })
        return (
            <div className='row'>
                <div className="App">
                    {cardList}
                    {savedCards}
                </div>
            </div>

        )
    }
}
export default CardSet