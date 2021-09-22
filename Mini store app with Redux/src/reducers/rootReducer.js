import {combineReducers} from 'redux';
import {frozenReducer} from './frozenReducer.js';
import { meatReducer } from './meatReducer.js';
import {produceReducer} from './produceReducer.js';



const rootReducer =  combineReducers({
    frozen: frozenReducer,
    produce: produceReducer,
    meat: meatReducer
})

export default rootReducer;