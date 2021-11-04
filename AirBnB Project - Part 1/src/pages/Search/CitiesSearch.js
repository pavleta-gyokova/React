import React from 'react';
import City from '../../utility/City/City';


function CitiesSearch(props) {
    const cities = props.cities.map((city, index) => {
        return (
            <div key={index} className='col s3'>
                <City city={city} key={index} />
            </div>
        )
    })

    return (
        <div className='cities-wrapper'>
            <h1 className='main-header-text'>{props.header}</h1>
            {cities}
        </div>
    )

}
export default CitiesSearch;