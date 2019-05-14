import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  // as data is entered, capture in the state
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div
        className="container"
        style={{
          paddingTop: '200px',
          backgroundColor: '#ffd890',
          height: '736px'
        }}
      >
        {' '}
        <div className="container">
          <div className="mask show" />
          <div className="form-container show">
            <div className="form-card show">
              <div className="form-header">
                <h5 className="form-name text-center">
                  Login to Divert Durham
                </h5>
                <form
                  className="form-field-container"
                  onSubmit={this.onFormSubmit}
                >
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
                  <p>Password</p>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={this.state.password}
                    style={inputStyle}
                    onChange={this.onInputChange}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <Save style={{ float: 'left' }}>Cancel</Save>
        </Link>
        <Link to="/home">
          <Save style={{ float: 'right' }}>Submit</Save>
        </Link>
      </div>
    )
  }
}

const Save = styled.button`
  background-color: 'white';
  margin: 15px 15px 3px 3px;
  border-radius: 5px;
  border: transparent;
`

const inputStyle = {
  backgroundColor: '#ddd',
  borderRadius: '5px',
  marginBottom: '10px'
}
export default Login
