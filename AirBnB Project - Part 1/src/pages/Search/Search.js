import React, { Component } from 'react';
import '../Home/home.css';
import './Search.css'
import Spinner from '../../utility/Spinner/Spinner.js';
import axios from 'axios';
import Activities from '../../utility/Activity/Activities.js';
import Venues from '../../utility/Venue/Venues';
import { Link } from 'react-router-dom';
import CitiesSearch from './CitiesSearch';


class Search extends Component {
    state = {
        activities: [],
        cities: [],
        venues: [],
        apiResponse: false
    }
    async componentDidMount() {
        const searchTerm = this.props.match.params.searchTerm;
        const searchUrl = `${window.apiHost}/search/${searchTerm}`;
        const response = await axios.get(searchUrl);
        this.setState({
            activities: response.data.activities,
            cities: response.data.cities,
            venues: response.data.venues,
            apiResponse: true
        })
        // if(this.state.cities.length === 0 && this.state.activities.length === 0 && this.state.venues.length === 0){
        //     swal({
        //         title: "No match found!",
        //         icon: "warning",
                
        //     })
        // }
    }

    render() {
        let classNameBK = '';
        console.log(this.state.cities)

        if (!this.state.apiResponse) {
            return <Spinner />
        }
        if(this.state.cities.length === 0 && this.state.activities.length === 0 && this.state.venues.length === 0){
            classNameBK = "all";
        }
        return (
            <div className={`container-fluid lower-fold search ${classNameBK}`}>
                <div className='row'>
                    {this.state.cities.length === 0 ? "" : <div className='col s12'>
                        <CitiesSearch className='citySearch' cities={this.state.cities} header='Cities Matching Your search' />
                    </div>}
                    {this.state.activities.length === 0 ? '' : <div className='col s12'>
                        <Activities activities={this.state.activities} header="Activities Matching Your Search" />
                    </div>}

                    {this.state.venues.length === 0 ? "" : <div className='col s12'>
                        <Venues venues={this.state.venues} header="Venues Matching Your Search" />
                    </div>}
                    {this.state.cities.length === 0 && this.state.activities.length === 0 && this.state.venues.length === 0 ? 
                    <div className='row match'>
                        <h4 className='text'>No Match Found</h4>
                        <p className='link text'><Link to='/'>Please try again!</Link></p>
                        </div>
                     : ''}
                </div>
            </div>
        )
    }
}

export default Search;