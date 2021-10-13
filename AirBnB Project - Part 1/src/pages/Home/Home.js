import React, { Component } from 'react';
import './home.css';
import SearchBox from './SearchBox.js';
import Spinner from '../../utility/Spinner/Spinner.js';
import Cities from '../../utility/City/Cities.js'
import axios from 'axios';


class Home extends Component {

    state = {
        cities: [],
        europeCities: {},
        asiaCities: {},
        usaCities: {}
    }

    async componentDidMount() {
        const recommendedCities = await axios.get(`${window.apiHost}/cities/recommended`);
        const europeCities = await axios.get(`${window.apiHost}/cities/europe`);
        const asiaCities = await axios.get(`${window.apiHost}/cities/asia`);
        const usaCities = await axios.get(`${window.apiHost}/cities/us`);
        Promise.all([recommendedCities, europeCities, asiaCities, usaCities])
            .then((data) => {
                const recCities = data[0].data;
                const euCities = data[1].data;
                const asCities = data[2].data;
                const usCities = data[3].data;
                this.setState({
                    cities: recCities,
                    europeCities: euCities,
                    asiaCities: asCities,
                    usaCities: usCities
                });
            })

    }


    render() {
        if (this.state.cities.length === 0) {
            return (
                <Spinner />
            )
        }

        return (<>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='home col s12'>
                        <div className='upper-fold'>
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid lower-fold'>
                <div className='row'>
                    <div className='col s12'>
                        <Cities cities={this.state.cities} header='Recommended Cities For You' />
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.europeCities.cities} header={this.state.europeCities.header} />
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.asiaCities.cities} header={this.state.asiaCities.header} />
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.usaCities.cities} header={this.state.usaCities.header} />
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Home;
