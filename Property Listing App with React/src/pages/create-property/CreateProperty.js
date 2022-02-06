import React from 'react';
import './CreateProperty.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

function CreateProperty() {
    return (
        <div className='create-property'>
            <form className='create-property-form'>
                <div className='create-property-form-group'>
                    <input autoFocus={true} type='text' placeholder='Property title' className='create-property-info' />
                    <label htmlFor='listingPropertyImage' className='create-property-img-upload'>
                        <FontAwesomeIcon icon={faUpload} className='create-property-icon' />
                    </label>
                    <input type='file' id='listingPropertyImage' style={{ display: 'none' }} />
                </div>
                <div className='create-property-form-group'>
                    <input type='text' placeholder='Property address' className='create-property-info' />
                </div>
                <div className='create-property-form-group'>
                    <label htmlFor='beds'>Bedrooms:</label>
                    <select name='beds' id='beds'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <label htmlFor='baths'>Bathrooms:</label>
                    <select name='baths' id='baths'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <label htmlFor='garage'>Garage:</label>
                    <select name='garage' id='garage'>
                        <option value='1 car'>1 car</option>
                        <option value='2 cars'>2 cars</option>
                        <option value='3 cars'>3 cars</option>
                        <option value='4 cars'>4 cars</option>
                        <option value='5 cars'>5 cars</option>
                    </select>
                </div>
                <div className='create-property-form-group'>
                    <label htmlFor='property-type'>Property type : </label>
                    <input type='text' id='property-type' className='property-primary-info'></input>
                    <label htmlFor='build-year'>Built Year:</label>
                    <input type='number' id='build-year' className='property-primary-info'></input>
                    <label htmlFor='property-size'>Property size (sqft): </label>
                    <input type='number' id='property-size' className='property-primary-info'></input>
                </div>
                <div className='create-property-form-group'>
                    <textarea placeholder='Property description' className='create-property-info create-listing-desc'></textarea>
                </div>
                <button className='create-listing-button'>Submit</button>
            </form>
        </div>
    )
}

export default CreateProperty
