import React, { Component } from 'react';
import axios from 'axios';
import './PaymentSuccess.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import Spinner from '../../utility/Spinner/Spinner';
import moment from 'moment';
import { Link } from 'react-router-dom';
library.add(faLongArrowAltRight);


class PaymentSuccess extends Component {
    state = {
        reservationDetails: {},
        userData: {},
        waiting: true
    }

    async componentDidMount() {
        const stripeToken = this.props.match.params.token;
        const token = this.props.auth.token;
        const data = {
            stripeToken,
            token
        }
        const successUrl = `${window.apiHost}/payment/success`;
        const response = await axios.post(successUrl, data);
        console.log(response.data)
        this.setState({
            reservationDetails: response.data.reservationDetails,
            userData: response.data.userData,
            waiting: false
        })
    }

    render() {
        if (this.state.waiting) {
            return (
                <Spinner />
            )
        }
        const reservationDetails = this.state.reservationDetails;
        const venueData = reservationDetails.venueData;
        const userData = this.state.userData;
        return (
            <div className="reservation-success row">
                <h1 className="col m12 center">Start Packing!</h1>
                <div className="resv-details col s8 offset-s2">
                    <div className="confirmed col m12 row">
                        <FontAwesomeIcon icon="long-arrow-alt-right" size="1x" color="#ED0000" />Confirmed: {reservationDetails.diffDays} nights in {venueData.location}
            <div className="header-text">
                            <div>Booked by: {userData.email}</div>
                            <div>{moment(new Date()).format("MMM Do YYYY")}</div>
                        </div>
                    </div>
                    <div className="confirmed-detail row">
                        <div className="col m5">
                            <div className="bordered col">
                                <div className="col m12 upper">
                                    <div className="left">Check in</div><div className="right">Check out</div>
                                </div>
                                <div className="col m12 lower">
                                    <div className="left">{moment(reservationDetails.checkIn).format("MMM Do YYYY")}</div><div className="right">{moment(reservationDetails.checkOut).format("MMM Do YYYY")}</div>
                                </div>
                                <div className="col m12 title-text">
                                    {venueData.title}
                    </div>
                                <div className="col m12 details">
                                    {venueData.details}
                    </div>
                            </div>
                        </div>


                        <div className="col m7">
                            <div className="bordered col">
                                <div className="col m12 upper charges">
                                    <div className="charges-text col m12">Charges</div>
                                    <div className="row col m12">
                                        <div className="left">${venueData.pricePerNight} x {reservationDetails.diffDays} days</div>
                                        <div className="right">${reservationDetails.totalPrice}</div>
                                    </div>
                                    <div className="row col m12">
                                        <div className="left">Discount</div>
                                        <div className="right">$0</div>
                                    </div>
                                    <div className="row col m12 total">
                                        <div className="left">TOTAL</div>
                                        <div className="right">${reservationDetails.totalPrice}</div>
                                    </div>
                                </div>
                                <div className="col m12 row">To review or make changes to your reservation in the future, visit your <Link to="/account">account page</Link>.</div>
                                <div className="col m12 resv-image"><img src={venueData.imageUrl} alt='venue' /></div>
                            </div>
                        </div>
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

export default connect(mapStateToProps)(PaymentSuccess);