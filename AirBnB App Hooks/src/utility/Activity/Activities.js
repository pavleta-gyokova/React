import React from 'react';
import Activity from './Activity';
import './Activity.css';

function Activities(props) {


    const activities = props.activities.map((activity, index) => {
        return (
            <div key={index} className='col s2'>
                <Activity activity={activity} />
            </div>
        )
    })
    return (

        <div className='activities'>
            <h1 className='main-header-text'>{props.header}</h1>
            {activities}
        </div>

    )
}

export default Activities;