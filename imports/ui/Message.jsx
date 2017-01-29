import React, { Component, PropTypes } from 'react';
import { Messages } from '../api/messages.js';

// Task component - represents a single todo item
export default class Message extends Component {
  deleteThisMessage() {
    Messages.remove(this.props.message._id);
  }

  render() {
    return (
      <li className="collection-item avatar">
         <i className="material-icons circle"> folder</i>

          <span id="user-name">
          {this.props.message.user}
          </span>

          <p className="message-body">
          {this.props.message.text}
          </p>
          <a id="delete-msg-icon" href="#">
          <i 
          className="material-icons right"
          onClick={this.deleteThisMessage.bind(this)}>close</i>
          </a>
      </li>
    );
  }
}
 
Message.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  message: PropTypes.object.isRequired,
};