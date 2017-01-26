import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
 
// App component - represents the whole app
class App extends Component {
 
  renderMessages() {
  	return this.props.messages.map((message)=> (
      <Message key={message._id} message={message} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h2>Messages</h2>
        </header>
 
          <div id="messages-list">
           {this.renderMessages()}
         </div>

      </div>
    );
  }
}

App.propTypes = {
	messages: PropTypes.array.isRequired,
};

export default createContainer(()=> {
	return {
		messages: Messages.find({}).fetch(),
	};
}, App);