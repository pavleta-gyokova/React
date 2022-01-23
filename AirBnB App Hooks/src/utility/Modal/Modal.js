import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './Modal.css';
import openModal from '../../actions/openModal';

function Modal(props) {
    const siteModal = useSelector(state => state.siteModal);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(openModal('closed', ''));
    }

    let modalInlineStyle;
    if (siteModal.openClose === 'open') {
        modalInlineStyle = { display: 'block' }
    } else {
        modalInlineStyle = { display: 'none' }
    }
    return (
        <div className="site-modal" style={modalInlineStyle}>
            <div className="modal-content">
                <div className="col right">
                    <span onClick={closeModal} className="close">&times;</span>
                </div>
                <div className=''>
                    {siteModal.content}
                </div>
            </div>
        </div>
    )
}

export default Modal;



