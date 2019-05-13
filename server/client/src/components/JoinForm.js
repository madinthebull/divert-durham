import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser, convertAddress } from '../actions/index'
import styled from 'styled-components'
import { ModalBody } from 'reactstrap'

export class JoinForm extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    home: '',
    homeAddress: {},
    receiverType: '',
    dropOffInstructions: '',
    isAcceptingCompost: '',
    dropOff: ''
  }

  // as data is entered, capture in the state
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  getCoordinatesForHome = async () => {
    const { home } = this.state
    let address = home
    let convertedAddress = await this.props.convertAddress(address)
    console.log('convertedAddress', convertedAddress.payload)
    this.setState({
      homeAddress: convertedAddress.payload
    })
  }

  getCoordinatesForDropOff = async () => {
    if (this.state.dropOff) {
      const { dropOff } = this.state
      let address = dropOff
      let convertedCoordinates = await this.props.convertAddress(address)
      console.log('convertedCoordinates', convertedCoordinates.payload)
      this.setState({
        dropOffCoordinates: convertedCoordinates.payload
      })
    } else {
      return
    }
  }

  // on submit, send POST request to server
  onFormSubmit = async e => {
    e.preventDefault()

    await this.getCoordinatesForHome()

    await this.getCoordinatesForDropOff()

    const {
      username,
      password,
      email,
      firstName,
      lastName,
      home,
      homeAddress,
      receiverType,
      dropOffLocation,
      dropOffInstructions,
      isAcceptingCompost,
      dropOffCoordinates,
      dropOff
    } = this.state

    const newUserData = {
      username,
      password,
      email,
      firstName,
      lastName,
      home,
      homeAddress,
      receiverType,
      dropOffLocation,
      dropOffInstructions,
      isAcceptingCompost,
      dropOffCoordinates,
      dropOff
    }
    console.log()

    this.props.createUser(newUserData)

    // reset form
    this.setState({
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      home: '',
      receiverType: '',
      dropOffInstructions: '',
      isAcceptingCompost: '',
      dropOff: ''
    })
  }
  render() {
    return (
      <React.Fragment>
        <ModalBody>
          <div className="container">
            <div className="mask show" />
            <div className="form-container show">
              <div className="form-card show">
                <div className="form-header">
                  <div className="form-name">Join Divert Durham</div>
                  <form
                    className="form-field-container"
                    onSubmit={this.onFormSubmit}
                  >
                    <button style={{ float: 'right' }}>
                      <i
                        className="far fa-times-circle"
                        onClick={this.props.toggle}
                      />
                    </button>{' '}
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
                        alt="school garden icon"
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
                    <p>Are you ready to recieve food scraps?</p>
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
                      <Link to="/home">
                        <Save>Submit</Save>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </React.Fragment>
    )
  }
}

const inputStyle = {
  backgroundColor: '#ddd',
  borderRadius: '5px'
}

const Save = styled.button`
  background-color: #99c5b9;
  margin: 3px;
  border-radius: 5px;
  border: transparent;
`

// make our converted address from Redux store available to the component's props
const mapStateToProps = state => {
  return { address: state.address }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: newUserData => dispatch(createUser(newUserData)),
    convertAddress: address => dispatch(convertAddress(address))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinForm)
