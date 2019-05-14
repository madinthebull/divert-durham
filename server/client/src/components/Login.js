import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      <div className="container" style={{ marginTop: '200px' }}>
        {' '}
        <div>This is the login component</div>
        <div className="container">
          <div className="mask show" />
          <div className="form-container show">
            <div className="form-card show">
              <div className="form-header-container">
                <div className="form-header">
                  <div className="form-name">Login</div>
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
                  onChange={this.onInputChange}
                />
                <p className="">password</p>
                <input
                  type="password"
                  name="password"
                  className="form-field"
                  placeholder="Enter password"
                  value={this.state.password}
                  style={inputStyle}
                  onChange={this.onInputChange}
                />
              </form>
            </div>
          </div>
        </div>
        <Link to="/home">
          <button>Submit</button>
        </Link>
      </div>
    )
  }
}

const inputStyle = {
  backgroundColor: '#ddd',
  borderRadius: '5px'
}
export default Login
