import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// filling options: solid:only color; empty:no filling; striped:striped pattern

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card color="blue" shape="minion" filling="striped"/>
      </div>
    );
  }
}

class Card extends Component {
  render() {

    var rectStyle = {stroke:"none", fill:this.props.color};
    var content = {};
// if(this.props.filling ="striped"){content="url(#pattern)"}
//  else {content="none"};

    return (
      <div className="Card">
      <svg width="800" height="800" viewBox="150 180 500 500">
    <defs>
      <pattern id="pattern" x="0" y="0" width="3" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(180)">
        <rect x="0" y="0" width="1" height="8" style={rectStyle} /> 
      </pattern>
      </defs>
    <path stroke={this.props.color} stroke-width="3px" d="M264.86,240.08c-6.47.45-13-1.83-19.27-4.44-9-3.72-17.24-2.15-25.26,2.57-1.43.84-2.77,1.85-4.16,2.77-9.32,6.14-15.8,3.43-18.08-7.49a39.18,39.18,0,0,1,1-21.2c4.37-12.66,16.15-19.76,29.44-17.92a62.11,62.11,0,0,1,18.73,5.13c12.26,5.91,23.62,3.8,34.51-3.42,3.86-2.57,7.55-6.12,12.66-3.22s5.76,8.13,5.76,13.47C300.23,226.17,285.88,240.1,264.86,240.08Z"
      fill={content} />
  </svg>
      </div>
    );
  }
}

export default App;
