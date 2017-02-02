import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import Channel from './Channel.jsx';
import ExpressivePanel from './ExpressivePanel.jsx';

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
    return <Channel/>;
  }

  renderExpressives() {
    return <ExpressivePanel/>;
  }
 

    // this.props.channels.map((channel)=> (
    //     <Channel key={channel._id} channel={channel} />
    //   ));

  render() {
    return (

      <div  className="wrapper">
        <div className="navbar-fixed">
          <nav className="nav-extended">
            <div class="nav-wrapper">
             <a href="#" className="brand-logo center grey-text text-darken-4">eqho</a>
             <br/>
              <div className="nav-content">
                {this.renderChannels()}
              </div>
            </div>
          </nav>
        </div>

      <div className="container">

        <div className="messages-list">
          <ul className="collection">
              {this.renderMessages()} 
          </ul>
        </div>

         <div className="input-container">
              <div className="expressive-container">
                  <div className="expressive-panel center">
                    {this.renderExpressives()}
                  </div>

                  <div className="message-input">
                    <form className="new-msg" onSubmit={this.handleSubmit.bind(this)}>
                      <input 
                        type="text"
                        ref="textInput"
                        placeholder="The letters go here"
                        />
                        <i className="material-icons">done</i>
                      </form>
                  </div>
              </div>
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