import React, { Component } from 'react'
import { Link } from 'react-router';

class SetupWelcome extends Component {
  render() {
    return (
      <div>
        Welcome to Nuimo Hub. Press "continue" to continue :)
        <Link to="setup/wifi">Continue</Link>
      </div>
    );
  }
}

export default SetupWelcome
