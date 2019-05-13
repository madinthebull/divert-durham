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
        <div className="container" style={{ marginTop: '165px' }}>
          <div className="form-container">
            <div className="form-card">
              <div className="form-header-container">
                <div className="form-header">
                  <div className="form-name">Your profile</div>
                  <Link to="/">
                    <button className="col-5 offset-8">
                      {' '}
                      Log Out
                      <span role="img" aria-label="waving hand">
                        👋🏽
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
              <form
                className="form-field-container"
                onSubmit={this.onFormSubmit}
              >
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
                  <img src="https://img.icons8.com/color/48/000000/orchid.png" />{' '}
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
                  <img src="https://img.icons8.com/color/48/000000/sprout.png" />{' '}
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
                  <img src="https://img.icons8.com/color/48/000000/school-building.png" />{' '}
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
                  <img src="https://img.icons8.com/color/48/000000/field.png" />{' '}
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
                <p>Put my drop off location on the map</p>
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
                <div className="form-footer-container">
                  <button>Save</button>
                </div>
              </form>
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
