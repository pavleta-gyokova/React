import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {produceInvUpdate} from '../actions/produceInvUpdate.js';

class ProduceDept extends Component{
    increment = (operation, index) => {
    this.props.produceUpdate(operation,index)
}
    render(){
        const produceInventory = this.props.produceData.map((item, i)=>{
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
                <h1>The produce food department!</h1>
                <ul>
                    {produceInventory}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        produceUpdate: produceInvUpdate
    },dispatch)
}

function mapStateToProps(state) {
    return {
        produceData: state.produce
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProduceDept);

