import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Channel extends Component {
  render() {
    return (
    	<ul>
	      <li>Hello channel 1</li>
	      <li>Hello channel 2</li>
	      <li>Hello channel 3</li>
	    </ul>
    );
  }
}
 
Channel.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  channel: PropTypes.object.isRequired,
};


