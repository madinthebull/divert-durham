import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import styled from 'styled-components'

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
        <div className="container" style={{ marginTop: '120px' }}>
          <div className="form-container">
            <div className="form-card">
              <div className="form-header">
                <div className="form-name">Your profile</div>
              </div>
            </div>
            <form className="form-field-container" onSubmit={this.onFormSubmit}>
              {' '}
              <p>Username</p>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter user name"
                value={this.state.username}
                style={inputStyle}
                onChange={this.onInputChange}
              />
              <p>Email Address</p>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email address"
                value={this.state.email}
                style={inputStyle}
                onChange={this.onInputChange}
              />
              <p>FIrst Name</p>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Enter first name"
                value={this.state.firstName}
                style={inputStyle}
                onChange={this.onInputChange}
              />
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Enter last name"
                value={this.state.lastName}
                style={inputStyle}
                onChange={this.onInputChange}
              />
              <p>Home Address</p>
              <input
                type="text"
                name="home"
                className="form-control"
                placeholder="Enter address"
                value={this.state.home}
                style={inputStyle}
                onChange={this.onInputChange}
              />
              <hr />
              <div>
                Only fill out the next section If you would like to be a
                receiver
              </div>
              <p className="">
                Please choose what best describes your drop off location
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="receiverType"
                  value={this.state.receiverType}
                  onChange={this.onInputChange}
                />
                <img
                  src="https://img.icons8.com/color/48/000000/orchid.png"
                  alt="personal garden icon"
                />{' '}
                Personal Garden
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="receiverType"
                  value={this.state.receiverType}
                  onChange={this.onInputChange}
                />{' '}
                <img
                  src="https://img.icons8.com/color/48/000000/sprout.png"
                  alt="community garden icon"
                />{' '}
                Community Garden
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="receiverType"
                  value={this.state.receiverType}
                  onChange={this.onInputChange}
                />
                <img
                  src="https://img.icons8.com/color/48/000000/school-building.png"
                  alt="school icon"
                />{' '}
                School Garden
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="receiverType"
                  value={this.state.receiverType}
                  onChange={this.onInputChange}
                />
                <img
                  src="https://img.icons8.com/color/48/000000/field.png"
                  alt="farm icon"
                />{' '}
                Farm
              </div>
              <p>Drop Off Location</p>
              <input
                type="text"
                name="dropOffLocation"
                className="form-control"
                placeholder="Enter name of your drop off location. Ex: 'Joe's Jungle', 'Seeds', 'Bluebird Farm'"
                value={this.state.droppOffLocation}
                style={inputStyle}
                onChange={this.onInputChange}
              />
              <p>Drop Off Address</p>
              <input
                type="text"
                name="dropOff"
                className="form-control"
                placeholder="Enter address where you'd like scraps to be dropped off"
                value={this.state.dropOff}
                style={inputStyle}
                onChange={this.onInputChange}
              />
              <p>Drop Off Instructions</p>
              <textarea
                rows="5"
                name="dropOffInstructions"
                className="form-control"
                placeholder="Enter drop off instructions"
                value={this.state.dropOffInstructions}
                style={inputStyle}
                onChange={this.onInputChange}
              />
              <p>Are you ready to receive food scraps?</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="true"
                  value={this.state.isAcceptingCompost}
                  onChange={this.onInputChange}
                />
                Yes
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="false"
                  value={this.state.isAcceptingCompost}
                  onChange={this.onInputChange}
                />
                No
              </div>
              <hr />
              <div
                className="form-footer-container"
                style={{ marginBottom: '50px' }}
              >
                <Save>Save</Save>{' '}
                <Link to="/">
                  <Save className="col-4 offset-6">
                    {' '}
                    Log Out
                    <span role="img" aria-label="waving hand">
                      👋🏽
                    </span>
                  </Save>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    )
  }
}

const Save = styled.button`
  background-color: #80b6a7;
  margin: 3px;
  border-radius: 5px;
  border: transparent;
`

const inputStyle = {
  backgroundColor: '#ddd',
  borderRadius: '5px'
}
export default Profile
