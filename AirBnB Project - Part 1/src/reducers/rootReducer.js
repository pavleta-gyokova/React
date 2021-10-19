import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
import siteModal from './siteModal.js';

const rootReducer = combineReducers({
    auth: authReducer,
    siteModal: siteModal,
});

export default rootReducer;
