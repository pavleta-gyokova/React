import React, { Component } from 'react';

class Modal extends Component {
    constructor() {
      super()
    }
    render() {
      return (
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.props.data.cityName}</h4>
            <p>High: {this.props.data.high} - Low: {this.props.data.low}</p>
            <p>{this.props.data.weather} <img src={this.props.icon} alt='weather icon' /></p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      )
    }
  }

  export default Modal;