import React from 'react';
import './ListingDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faHome, faRulerCombined, faWarehouse, faHammer } from '@fortawesome/free-solid-svg-icons';
function ListingDetail() {
    return (
        <div className='listing-detail'>
            <div className='listing-detail-content'>
                <img className='listing-detail-image' src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                <h1 className='listing-detail-title'>
                    Single-Family Home
                    <div className='listing-detail-actions'>
                        <FontAwesomeIcon icon={faEdit} className='listing-detail-actions-icons' />
                        <FontAwesomeIcon icon={faTrashAlt} className='listing-detail-actions-icons' />
                    </div>
                </h1>
                <div className='listing-detail-meta-info'>
                    <span className='listing-detail-author'>Author - <strong>Edward Russell</strong></span>
                    <span className='listing-detail-edit-time'>2 day ago</span>
                </div>
                <div className='listing-detail-important-info'>
                    <span><strong>4</strong> beds</span>
                    <span><strong>2</strong> baths</span>
                    <span><strong>2,539</strong> sqft</span>
                </div>
                <p className="listing-detail-property-address">237 Angel Hall Dr, Columbia, SC</p>
                <div className='listing-detail-property-highlights'>
                    <span className='listing-detail-property-type'>
                        <FontAwesomeIcon icon={faHome} className='listing-detail-highlights-icons' />
                    Property Type : <strong className='property-type'>Single Family</strong>
                    </span>
                    <span className='listing-detail-property-garage'>
                        <FontAwesomeIcon icon={faWarehouse} className='listing-detail-highlights-icons' />
                    Garage : <strong className='property-cars'>2 cars</strong>
                    </span>
                    <span className='listing-detail-property-buld-year'>
                        <FontAwesomeIcon icon={faHammer} className='listing-detail-highlights-icons' />
                    Built Year: <strong className='property-build-year'>2008</strong>
                    </span>
                </div>
                <p className='listing-detail-description'>
                    Beautiful home built in 2008 and located in a premier location in Columbia. The home is in immaculate condition and is located in a peaceful, country setting. Open floor plan with a large kitchen, dining, and living area with hardwood flooring throughout. The kitchen has an island and granite countertops. The living room features a gorgeous coffered ceiling. There is a covered deck off of the dining room with plenty of room to enjoy the seasonal mountain views and a fenced backyard. The home features 2 bedrooms and 2 bathrooms. The large owner's suite has a beautiful tray ceiling and granite countertops in the en-suite bath. A nice-sized laundry room leads you into the 2 car garage. Make an appointment to view today!
                </p>
            </div>
        </div>
    )
}

export default ListingDetail
