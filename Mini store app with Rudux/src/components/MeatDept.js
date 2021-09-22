import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {meatInvUpdate} from '../actions/meatInvUpdate.js';


class MeatDept extends Component{
    increment = (operation, index) => {
    this.props.meatUpdate(operation,index);
}
    render(){
        const meatInventory = this.props.meatData.map((item, i)=>{
            return(
                <div key={i}>
                    <li >{item.food} : {item.quantity}</li>
                    <input type='button' onClick={() => { this.increment('+', i) }} value='+' />
                    <input type='button' onClick={() => { this.increment('-', i) }} value='-' />
                </div>
            )
        })
        return(
            <div>
                <h1>The meat food department!</h1>
                <ul>
                    {meatInventory}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        meatUpdate: meatInvUpdate
    },dispatch)
}

function mapStateToProps(state) {
    return {
        meatData: state.meat
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MeatDept);

