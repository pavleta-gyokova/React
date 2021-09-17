import React, { Component } from 'react';

class Headers extends Component {
    constructor() {
      super()
    }
    render() {
      return (
        <div>
          <h1>{this.props.data.temp}&#xb0;</h1>
          <h4>{this.props.data.isRaining}</h4>
        </div>
  
      )
    }
  }

  export default Headers;