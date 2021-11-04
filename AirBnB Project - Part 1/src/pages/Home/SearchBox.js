import './SearchBox.css';
import React, { Component } from 'react';


class SearchBox extends Component {
    constructor() {
        super()

        this.state = {
            where: '',
            checkIn: '',
            checkout: '',
            guest: 0
        }
    }

    changeWhere = (event) => {
        this.setState({
            where: event.target.value
        })
    }

    ChangeCheckIn = (event) => {
        this.setState({
            checkIn: event.target.value
        })
    }

    ChangeCheckout = (event) => {
        this.setState({
            checkout: event.target.value
        })
    }

    changeGuest = (event) => {
        this.setState({
            guest: event.target.value
        })
    }
    submitSearch = (event) => {
        event.preventDefault();
        this.props.history.push(`/search/${this.state.where}`)
    }
    render() {
        return (
            <div className='home-search-box col m4'>
                <h1>Book unique places to stay and things to do.</h1>
                <form onSubmit={this.submitSearch} className='search-box-form'>
                    <div className='col m12'>
                        <div className='form-label'>Where</div>
                        <div className='input-field' id='where'>
                            <input className='browser-default' onChange={this.changeWhere} placeholder='Anywhere' value={this.state.where} type='text' />
                        </div>
                    </div>

                    <div className='col m6'>
                        <div className='form-label'>CHECK-IN</div>
                        <div className='input-field' id='check-in'>
                            <input onChange={this.ChangeCheckIn} placeholder='Anywhere' value={this.state.checkIn} type='date' />
                        </div>
                    </div>

                    <div className='col m6'>
                        <div className='form-label'>CHECK-OUT</div>
                        <div className='input-field' id='check-out'>
                            <input onChange={this.ChangeCheckout} placeholder='Anywhere' value={this.state.checkout} type='date' />
                        </div>
                    </div>

                    <div className='col m12'>
                        <div className='form-label'>Guests</div>
                        <div className='input-field' id='guest'>
                            <input className='browser-default' onChange={this.changeGuest} placeholder='Enter number of guests' value={this.state.guest} type='number' />
                        </div>
                    </div>

                    <div className='col m12 submit-btn'>
                        <div className='input-field' id='submit-btn'>
                            <input className='btn-large waves-effect waves-light red accent-2' type='submit' />
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBox;