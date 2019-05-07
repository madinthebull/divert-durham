import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SubmitButton from './Button'

export class JoinForm extends Component {
  state = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    profileType: ''
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div>This is the join form component</div>
          <div className="mask show" />
          <div className="form-container show">
            <div className="form-card show">
              <div className="form-header-container">
                <div className="form-header">
                  <div className="form-name">edit profile</div>
                  <div className="fas fa-times" />
                </div>
              </div>
              <form className="form-field-container">
                {' '}
                <p className="">Username</p>
                <input
                  type="text"
                  name="username"
                  className="form-field"
                  placeholder="Enter user name"
                  value={this.state.username}
                  style={inputStyle}
                />
                <p className="">email address</p>
                <input
                  type="email"
                  name="email"
                  className="form-field"
                  placeholder="Enter email address"
                  value={this.state.email}
                  style={inputStyle}
                />
                <p className="">first name</p>
                <input
                  type="text"
                  name="firstName"
                  className="form-field"
                  placeholder="Enter first name"
                  value={this.state.firstName}
                  style={inputStyle}
                />
                <p className="">last name</p>
                <input
                  type="text"
                  name="lastName"
                  className="form-field"
                  placeholder="Enter last name"
                  value={this.state.lastName}
                  style={inputStyle}
                />
                <p className="">home address</p>
                <input
                  type="text"
                  name="address"
                  className="form-field"
                  placeholder="Enter address"
                  value={this.state.address}
                  style={inputStyle}
                />
                <p className="">profile type</p>
                <input
                  type="text"
                  name="profileTyle"
                  className="form-field"
                  placeholder="Enter profile Type"
                  value={this.state.profileType}
                  style={inputStyle}
                />
                <div className="form-footer-container">
                  <Link to="/home">
                    <button>Submit</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const inputStyle = {
  backgroundColor: '#ddd',
  borderRadius: '5px'
}

export default JoinForm
