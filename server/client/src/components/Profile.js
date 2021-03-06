import React, { Component } from 'react'
import Navbar from './Navbar'
import Button from './Button'
import { Link } from 'react-router-dom'
import Footer from './Footer'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'madinthebull',
      email: 'mcstreilein@gmail.com',
      firstName: 'Madeline',
      lastName: 'Streilein',
      address: '915B Exum Street Durham NC 27701',
      profileType: 'Giver'
    }
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="mask show" />
          <div className="form-container show">
            <div className="form-card show">
              <div className="form-header-container">
                <div className="form-header">
                  <div className="form-name">edit profile</div>
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
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Choose profile type"
                  readOnly
                >
                  <button
                    type="button"
                    className="btn"
                    value={this.state.profileType}
                    name="profileType"
                    style={{ backgroundColor: '#c8deea' }}
                  >
                    Giver
                  </button>
                  <button
                    type="button"
                    className="btn"
                    value={this.state.profileType}
                    name="profileType"
                    style={{ backgroundColor: '#c8deea' }}
                  >
                    Reciever
                  </button>
                </div>
                <div className="form-footer-container">
                  <Button />
                </div>
              </form>
              <Link to="/">
                <button className="col-5">
                  {' '}
                  Log Out
                  <span role="img" aria-label="waving hand">
                    👋🏽
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

const inputStyle = {
  backgroundColor: '#ddd',
  borderRadius: '5px'
}
export default Profile
