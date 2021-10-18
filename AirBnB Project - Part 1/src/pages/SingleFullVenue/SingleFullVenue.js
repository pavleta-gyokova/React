import React, { Component } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import Points from './Point';

class SingleFullVenue extends Component {
    state = {
        singleVenue: {},
        points: [],
        amenities: []
    };
    async componentDidMount() {
        const vId = this.props.match.params.vid;
        const url = `${window.apiHost}/venue/${vId}`;
        const pointsUrl = `${window.apiHost}/points/get`;
        const VenueResponse = await axios.get(url);
        const pointsResponse = await axios.get(pointsUrl);
        Promise.all([VenueResponse, pointsResponse]).then((data) => {
            const singleVenue = data[0].data;
            const points = singleVenue.points.split(',')
                .map((point, index) => { return (<Points key={index} pointDesc={data[1].data} point={point} />) });
            const amenities = singleVenue.amenities.split(',')
                .map((amenity, index) => { return (<div key={index}><i className="material-icons" >done</i>{amenity}</div>)
        });
        this.setState({ singleVenue, points, amenities });
    }
        )
}



changeNumberOfGuests = (e) => { this.setState({ numberOfGuests: e.target.value }) };
changeCheckIn = (e) => { this.setState({ CheckIn: e.target.value }) };
changeCheckOut = (e) => { this.setState({ CheckOut: e.target.value }) };
reserveNow = (e) => { console.log("User wants to reserve!") }

render() {
    const sv = this.state.singleVenue;
    return (
        <div className='row single-venue'>
            <div className='col s12 center'>
                <img src={sv.imageUrl} alt='location' />
            </div>
            <div className='col s8 location-details offset-s2'>
                <div className='col s8 left-details'>
                    <div className='location'>{sv.location}</div>
                    <div className='title'>{sv.title}</div>
                    <div className='guests'>{sv.guests} guests</div>

                    <div className='divider'></div>

                    {this.state.points}
                    <div className='details'>
                        <span className='header-desc'>Details:</span><br />
                        {sv.details}</div>
                    <br />
                    <div className='amenities'>
                        <span className='header-desc'>What this place offers:</span><br />
                        {this.state.amenities}
                    </div>
                </div>
                <div className='col s4 right-details'>
                    <div className='price-per-day'>${sv.pricePerNight} <span> per day</span></div>
                    <div className='rating'><i className="material-icons star">star</i>{sv.rating} <span className='reviews'>(77 reviews)</span></div>

                    <div className='col s6' onChange={this.changeCheckIn}>
                        Check-In
                            <input type='date' />
                    </div>
                    <div className='col s6' onChange={this.changeCheckOut}>
                        Check-Out
                            <input type='date' />
                    </div>

                    <div className='col s12' onChange={this.changeNumberOfGuests}>
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
                            <button onClick={this.reserveNow} className='btn red accent-2'>Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
}

export default SingleFullVenue;
