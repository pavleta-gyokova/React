import React from 'react';

function Points(props){
    const pointTextObj = props.pointDesc.find((point) => point.pointTitle === props.point);
    return(
        <div>
            <div className='point-title'><i className="material-icons">check_box</i>{props.point}</div>
                <div className='point-desc'><i className="material-icons">chevron_right</i>{pointTextObj.text}</div>
        </div>
    )
}
export default Points;