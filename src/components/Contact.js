import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    const {name,email,phone} = this.props;
    return (
      <div>
        <ul>
            <li>name: {name}</li>
            <li>email: {email}</li>
            <li>phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

export default Contact;