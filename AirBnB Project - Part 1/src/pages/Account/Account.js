import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { Route } from 'react-router-dom';
import Bookings from './Bookings';
import AccountSideBar from './AccountSideBar';
import './Account.css'

class Account extends Component {
    state = {
        pastBookings: [],
        upcomingBookings: []
    }

    async componentDidMount() {
        const accountURL = `${window.apiHost}/users/getBookings`;
        const data = {
            token: this.props.auth.token
        }
        const response = await axios.post(accountURL, data);
        let pastBookings = [];
        let upcomingBookings = [];
        response.data.forEach(booking => {
            const today = moment(); // get today's date so we know which are past and future bookings
            const checkOutDate = moment(booking.checkIn);
            const diffDays = checkOutDate.diff(today, 'days');
            if (diffDays < 0) {
                pastBookings.push(booking);
            } else {
                upcomingBookings.push(booking);
            }

            this.setState({
                pastBookings,
                upcomingBookings
            })
        });

    }


    render() {
        const { pastBookings, upcomingBookings } = this.state;
        return (
            <div className='account container-fluid'>
                <AccountSideBar />
                <div className='row'>
                    <div className='col s8 offset-s3'>
                        <Route exact path='/account' render={() => <h1>Please choose an option on the left!</h1>} />
                        <Route exact path='/account/reservations/confirmed'>
                            <Bookings type='upcoming' bookings={upcomingBookings} token={this.props.auth.token} />
                        </Route>
                        <Route exact path='/account/reservations/past' >
                            <Bookings type='past' bookings={pastBookings} />
                        </Route>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Account)