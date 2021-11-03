import React, { Component } from 'react';
import './CityVenues.css';
// import { Link } from 'react-router-dom';
import axios from 'axios'
import Spinner from '../../utility/Spinner/Spinner';
import Venues from '../../utility/Venue/Venues';

class CityVenues extends Component {
    state = {
        header: '',
        venues: []
    }

    async componentDidMount() {
        const cityName = this.props.match.params.cityName;
        const url = `${window.apiHost}/venues/city/${cityName}`;
        const response = await axios.get(url, { cityName });
        this.setState({
            header: response.data.header,
            venues: response.data.venues
        })
    }

    render() {
        if (!this.state.header) {
            return <Spinner />
        }

        return (
            <div className='row'>
                <Venues venues={this.state.venues} header={this.state.header} />
            </div>
        )
    }


}

export default CityVenues;