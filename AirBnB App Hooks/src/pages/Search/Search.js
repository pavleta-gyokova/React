import React, { useState, useEffect } from 'react';
import '../Home/home.css';
import './Search.css'
import Spinner from '../../utility/Spinner/Spinner.js';
import axios from 'axios';
import Activities from '../../utility/Activity/Activities.js';
import Venues from '../../utility/Venue/Venues';
import { Link } from 'react-router-dom';
import CitiesSearch from './CitiesSearch';


function Search (props) {

    const [activities, setActivities] = useState([]);
    const [cities, setCities] = useState([]);
    const [venues, setVenues] = useState([]);
    const [apiResponse, setResponse] = useState(false);

    useEffect(()=>{
        const fetchSearchData = async () =>{
            const searchTerm = props.match.params.searchTerm;
            const searchUrl = `${window.apiHost}/search/${searchTerm}`;
            const response = await axios.get(searchUrl);

            setActivities(response.data.activities);
            setCities(response.data.cities);
            setVenues(response.data.venues);
            setResponse(true);
        }
        fetchSearchData();
    },[]) // only run this effect on first render

        let classNameBK = '';
        if (!apiResponse) {
            return <Spinner />
        }
        if(cities.length === 0 && activities.length === 0 && venues.length === 0){
            classNameBK = "all";
        }
        return (
            <div className={`container-fluid lower-fold search ${classNameBK}`}>
                <div className='row'>
                    {cities.length === 0 ? "" : <div className='col s12'>
                        <CitiesSearch className='citySearch' cities={cities} header='Cities Matching Your search' />
                    </div>}
                    {activities.length === 0 ? '' : <div className='col s12'>
                        <Activities activities={activities} header="Activities Matching Your Search" />
                    </div>}

                    {venues.length === 0 ? "" : <div className='col s12'>
                        <Venues venues={venues} header="Venues Matching Your Search" />
                    </div>}
                    {cities.length === 0 && activities.length === 0 && venues.length === 0 ? 
                    <div className='row match'>
                        <h4 className='text'>No Match Found</h4>
                        <p className='link text'><Link to='/'>Please try again!</Link></p>
                        </div>
                     : ''}
                </div>
            </div>
        )
}

export default Search;