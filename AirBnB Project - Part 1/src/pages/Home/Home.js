import React, { Component } from 'react';
import './home.css';
import SearchBox from './SearchBox.js';
import Spinner from '../../utility/Spinner/Spinner.js';
import Cities from '../../utility/City/Cities.js'
import axios from 'axios';
import Activities from '../../utility/Activity/Activities.js';
import Venues from '../../utility/Venue/Venues';


class Home extends Component {

    state = {
        cities: [],
        europeCities: {},
        asiaCities: {},
        usaCities: {},
        exCities: {},
        actToday: [],
        actScenery: [],
        actBaking: [],
        actDiving : [],
        actAnimals : [],
        reVenues: {},
        SHVenues: {}

    }

    async componentDidMount() {
        const recommendedCities = await axios.get(`${window.apiHost}/cities/recommended`);
        const europeCities = await axios.get(`${window.apiHost}/cities/europe`);
        const asiaCities = await axios.get(`${window.apiHost}/cities/asia`);
        const usaCities = await axios.get(`${window.apiHost}/cities/us`);
        const exoticCities = await axios.get(`${window.apiHost}/cities/exotic`);
        const recommendedVenues = await axios.get(`${window.apiHost}/venues/recommended`);
        const superHostVenues = await axios.get(`${window.apiHost}/venues/superHost`);
        
        Promise.all([recommendedCities, europeCities, asiaCities, usaCities,exoticCities,recommendedVenues,superHostVenues])
            .then((data) => {
                const recCities = data[0].data;
                const euCities = data[1].data;
                const asCities = data[2].data;
                const usCities = data[3].data;
                const exCities = data[4].data;
                const reVenues = data[5].data;
                const SHVenues = data[6].data;
                this.setState({
                    cities: recCities,
                    europeCities: euCities,
                    asiaCities: asCities,
                    usaCities: usCities,
                    exCities,
                    reVenues,
                    SHVenues
                });
            })

            const activitiesToday = await axios.get(`${window.apiHost}/activities/today`);
            const activitiesScenery = await axios.get(`${window.apiHost}/activities/scenery`);
            const activitiesBaking = await axios.get(`${window.apiHost}/activities/baking`);
            const activitiesDiving = await axios.get(`${window.apiHost}/activities/diving`);
            const activitiesAnimals = await axios.get(`${window.apiHost}/activities/animals`);

            Promise.all([activitiesToday,activitiesScenery,activitiesBaking,activitiesDiving,activitiesAnimals])
            .then((data) =>{
                const actToday = data[0].data;
                const actScenery = data[1].data;
                const actBaking = data[2].data;
                const actDiving = data[3].data;
                const actAnimals = data[4].data;
                this.setState({
                    actToday,
                    actScenery,
                    actBaking,
                    actDiving,
                    actAnimals
                })
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
                            <SearchBox history={this.props.history}/>
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
                        <Activities activities={this.state.actToday} header="Today in your area"/>
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.europeCities.cities} header={this.state.europeCities.header} />
                    </div>
                    <div className='col s12'>
                        <Activities activities={this.state.actScenery} header="Scenery"/>
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.exCities.cities} header={this.state.exCities.header} />
                    </div>
                    <div className='col s12'>
                        <Activities activities={this.state.actAnimals} header="Animals"/>
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.asiaCities.cities} header={this.state.asiaCities.header} />
                    </div>
                    <div className='col s12'>
                        <Activities activities={this.state.actBaking} header="Baking"/>
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.usaCities.cities} header={this.state.usaCities.header} />
                    </div>
                    <div className='col s12'>
                        <Activities activities={this.state.actDiving} header="Diving"/>
                    </div>
                    <div className='col s12'>
                        <Venues venues={this.state.reVenues.venues} header={this.state.reVenues.header}/>
                    </div>
                    <div className='col s12'>
                        <Venues venues={this.state.SHVenues.venues} header={this.state.SHVenues.header}/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Home;