import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Channel extends Component {
  render() {
    return (
      <ul className="tabs">
          <li className="tab"><a href="#" className="grey-text text-darken-4">+Hello channel 1</a></li>
          <li className="tab"><a href="#" className="grey-text text-darken-4">+Hello channel 2</a></li>
          <li className="tab"><a href="#" className="grey-text text-darken-4">+Hello channel 3</a></li>
      </ul>
    );
  }
}
 
Channel.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  channel: PropTypes.object.isRequired,
};


