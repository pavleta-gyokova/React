import React, {useEffect, useState } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import Points from './Point';
import {useDispatch, useSelector } from 'react-redux';
import openModal from '../../actions/openModal';
import Login from '../Login/Login';
import moment from 'moment';
import swal from 'sweetalert'
import loadScript from '../../utilityFunctions/loadScript';

function SingleFullVenue(props) {
    
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const [singleVenue, setSingleVenue] = useState({});
    const [points, setPoints] = useState([]);
    const [amenities, setAmenties] = useState([]);
    const [numberOfGuests, changeNumberOfGuests] = useState(1);
    const [checkIn, changeCheckIn] = useState('');
    const [checkOut, changeCheckOut] = useState('');

    useEffect(() => {
        const vId = props.match.params.vid;
        const url = `${window.apiHost}/venue/${vId}`;
        const pointsUrl = `${window.apiHost}/points/get`;
        const getData = async () => {
            const VenueResponse = await axios.get(url);
            const pointsResponse = await axios.get(pointsUrl);

            Promise.all([VenueResponse, pointsResponse]).then((data) => {
                const singleVenue = data[0].data;
                const points = singleVenue.points.split(',')
                    .map((point, index) => { return (<Points key={index} pointDesc={data[1].data} point={point} />) });
                const amenities = singleVenue.amenities.split(',').map((amenity, index) => {
                    return (<div key={index}><i className="material-icons" >done</i>{amenity}</div>)
                });
                setSingleVenue(singleVenue);
                setPoints(points);
                setAmenties(amenities);
            });
        }
        getData();
    }, [])

    const reserveNow = async (e) => {
        const starDayMoment = moment(checkIn);
        const endDayMoment = moment(checkOut);
        const diffDays = endDayMoment.diff(starDayMoment, 'days');

        if (diffDays < 0) {
            swal({
                title: 'Check out date must be before check in date!',
                icon: 'error'
            })
        } else if (diffDays === 0 || isNaN(diffDays)) {
            swal({
                title: 'Please make sure your dates are valid!',
                icon: 'error'
            })
        } else {
            const pricePerNight = singleVenue.pricePerNight;
            const totalPrice = diffDays * pricePerNight;
            const stripePublicKey = 'pk_test_5198HtPL5CfCPYJ3X8TTrO06ChWxotTw6Sm2el4WkYdrfN5Rh7vEuVguXyPrTezvm3ntblRX8TpjAHeMQfHkEpTA600waD2fMrT';
            const scriptURL = 'https://js.stripe.com/v3';
            await loadScript(scriptURL);
            const stripe = window.Stripe(stripePublicKey);
            const stripeSessionURL = `${window.apiHost}/payment/create-session`;
            const data = {
                venueData: singleVenue,
                totalPrice,
                diffDays,
                pricePerNight,
                checkIn: starDayMoment._i,
                checkOut: endDayMoment._i,
                token,
                numberOfGuest: numberOfGuests,
                currency: 'USD'
            }
            const sessionVar = await axios.post(stripeSessionURL, data);
            stripe.redirectToCheckout({
                sessionId: sessionVar.data.id
            }).then((result) => {
                console.log(result)
            })
        }
    }

    return (
        <div className='row single-venue'>
            <div className='col s12 center'>
                <img src={singleVenue.imageUrl} alt='location' />
            </div>
            <div className='col s8 location-details offset-s2'>
                <div className='col s8 left-details'>
                    <div className='location'>{singleVenue.location}</div>
                    <div className='title'>{singleVenue.title}</div>
                    <div className='guests'>{singleVenue.guests} guests</div>

                    <div className='divider'></div>

                    {points}
                    <div className='details'>
                        <span className='header-desc'>Details:</span><br />
                        {singleVenue.details}</div>
                    <br />
                    <div className='amenities'>
                        <span className='header-desc'>What this place offers:</span><br />
                        {amenities}
                    </div>
                </div>
                <div className='col s4 right-details'>
                    <div className='price-per-day'>${singleVenue.pricePerNight} <span> per day</span></div>
                    <div className='rating'><i className="material-icons star">star</i>{singleVenue.rating} <span className='reviews'>(77 reviews)</span></div>

                    <div className='col s6' onChange={(e) => { changeCheckIn(e.target.value) }}>
                        Check-In
                            <input type='date' />
                    </div>
                    <div className='col s6' onChange={(e) => { changeCheckOut(e.target.value) }}>
                        Check-Out
                            <input type='date' />
                    </div>

                    <div className='col s12' onChange={(e) => { changeNumberOfGuests(e.target.value) }}>
                        <select className='browser-default'>
                            <option value='1'>1 Guest</option>
                            <option value='2'>2 Guest</option>
                            <option value='3'>3 Guest</option>
                            <option value='4'>4 Guest</option>
                            <option value='5'>5 Guest</option>
                            <option value='6'>6 Guest</option>
                            <option value='7'>7 Guest</option>
                            <option value='8'>8 Guest</option>
                        </select>
                        <div className='col s12 center'>
                            {token ?
                                <button onClick={reserveNow} className='btn red accent-2'>Reserve</button>
                                : <div>You must <span className='text-link' onClick={() => { dispatch(openModal('open', <Login />)) }}> log in</span> to reserve!</div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default SingleFullVenue;