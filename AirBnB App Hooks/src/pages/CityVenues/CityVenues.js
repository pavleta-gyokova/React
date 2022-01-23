import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from '../../utility/Spinner/Spinner';
import Venues from '../../utility/Venue/Venues';

function CityVenues(props) {
    const [header, setHeader] = useState('');
    const [venues, setVenues] = useState([]);

    useEffect(() => {
        const cityName = props.match.params.cityName;
        const url = `${window.apiHost}/venues/city/${cityName}`;
        const getVenues = async () => {
            const response = await axios.get(url, { cityName });
            setHeader(response.data.header);
            setVenues(response.data.venues);
        }
        getVenues();

    }, []);


    if (!header) {
        return <Spinner />
    }

    return (
        <div className='row'>
            <Venues venues={venues} header={header} />
        </div>
    )
}

export default CityVenues;