import React, { Component, PropTypes } from 'react';
import { Messages } from '../api/messages.js';

// Task component - represents a single todo item
export default class Message extends Component {
  deleteThisMessage() {
    Messages.remove(this.props.message._id);
  }

  render() {
    return (

      		<div className="valign-wrapper">

            <div className="message-container valign">

        			<div id="user-image">

        			</div>

        			<div id="user-name">
        				{this.props.message.user}
        			</div>

        			<div className="message-body">
        				{this.props.message.text}

        			</div>
                <a id="delete-msg-icon" href="#">
                    <i 
                    className="material-icons right"
                     onClick={this.deleteThisMessage.bind(this)}>close</i>
              
                </a>
                    
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