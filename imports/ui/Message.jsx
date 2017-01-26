import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Message extends Component {
  render() {
    return (

      		<div id="message-container">
      			<div id="user-image">
      				place
      			</div>

      			<div id="user-name">
      				{this.props.message.user}
      			</div>

      			<div className="message-body">
      				{this.props.message.text}
      			</div>
      		</div>
      	

    );
  }
}
 
Message.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  message: PropTypes.object.isRequired,
};