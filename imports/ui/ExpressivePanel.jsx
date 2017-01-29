import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class ExpressivePanel extends Component {
  render() {
    return (
        <ul className="inline">
          <li>
            <i id="expressive-gif" className="material-icons expressive">
              gif
            </i>
          </li>
          <li>
            <i id="expressive-gesture" className="material-icons expressive">
            gesture
            </i>
          </li>
          <li>
            <i id="expressive-mic" className="material-icons expressive">
              mic
              </i>
          </li>
        </ul>
    	
    );
  }
}
 
ExpressivePanel.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  channel: PropTypes.object.isRequired,
};
