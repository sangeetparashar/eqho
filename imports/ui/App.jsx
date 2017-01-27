import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
 
// App component - represents the whole app
class App extends Component {

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
 const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Messages.insert({
      text,
      createdAt: new Date(),
      user: "Robert" // current time
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
 
  renderMessages() {
  	return this.props.messages.map((message)=> (
      <Message key={message._id} message={message} />
    ));
  }

  renderChannels() {
    return ;
  }
 

    // this.props.channels.map((channel)=> (
    //     <Channel key={channel._id} channel={channel} />
    //   ));

  render() {
    return (
      <div className="container">
        <header>
          <div className="channel-control">
            <div className="logo-container">
              <p> hello world</p>
            </div>

            <div className="channel-container">
              {this.renderChannels()}
            </div>
          
          </div>
        </header>
 
          <div className="messages-list">
           {this.renderMessages()}
         </div>

         <div className="expression-control">
            <div className="expressive-panel">

            </div>

            <div className="message-input">
              <form className="new-msg" onSubmit={this.handleSubmit.bind(this)}>
                <input 
                  type="text"
                  ref="textInput"
                  placeholder="The letters go here"
                  />
                </form>
            </div>
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
		messages: Messages.find(
      ).fetch(),
	};
}, App);