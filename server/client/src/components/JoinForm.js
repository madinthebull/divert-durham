import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SubmitButton from './Button'
import { createUser } from '../actions/index'

export class JoinForm extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    homeAddress: '',
    dropOffInstructions: '',
    isAcceptingCompost: '',
    dropOffCoordinates: ''
  }

  // as data is entered, capture in the state
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // on submit, send POST request to server
  onFormSubmit = e => {
    const {
      username,
      password,
      email,
      firstName,
      lastName,
      homeAddress,
      dropOffInstructions,
      isAcceptingCompost,
      dropOffCoordinates
    } = this.state

    const newUserData = {
      username,
      password,
      email,
      firstName,
      lastName,
      homeAddress,
      dropOffInstructions,
      isAcceptingCompost,
      dropOffCoordinates
    }

    this.props.createUser(newUserData)

    // reset form
    this.setState({
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      homeAddress: '',
      dropOffInstructions: '',
      isAcceptingCompost: '',
      dropOffCoordinates: ''
    })

    e.preventDefault()
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="form-name">Join Divert Durham</div>
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
              name="homeAddress"
              className="form-control"
              placeholder="Enter address"
              value={this.state.homeAddress}
              style={inputStyle}
              onChange={this.onInputChange}
            />
            <hr />
            <div>
              Only fill out the next section If you would like to be a receiver
            </div>
            <p>Drop Off Location</p>
            <input
              type="text"
              name="dropOffCoordinates"
              className="form-control"
              placeholder="Enter address where you'd like scraps to be dropped off"
              value={this.state.dropOffCoordinates}
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
            <p className="">Want to receive food scrap donations now?</p>
            <div
              className="btn-group"
              role="group"
              aria-label="Actively accepting compost"
            >
              <button
                type="button"
                className="btn"
                value={this.state.isAcceptingCompost}
                name="true"
                style={{ backgroundColor: '#c8deea' }}
                onChange={this.onInputChange}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn"
                value={this.state.isAcceptingCompost}
                name="false"
                style={{ backgroundColor: '#c8deea' }}
                onChange={this.onInputChange}
              >
                No
              </button>
            </div>
            <div className="form-footer-container">
              <Link to="/home">
                <button>Submit</button>
              </Link>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

const inputStyle = {
  backgroundColor: '#ddd',
  borderRadius: '5px'
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: userData => dispatch(createUser(userData))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(JoinForm)
