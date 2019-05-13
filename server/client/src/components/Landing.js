import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../static/DDlogo.png'

const Button = styled.button`
  background-color: #white;
  margin: 3px;
  border-radius: 5px;
  border: transparent;
  width: 76.22px;
  height: 26px;
`

export class Landing extends Component {
  state = {
    showForm: false,
    form: {}
  }

  toggleShowForm = form => {
    this.setState({
      showLocationInfo: !this.state.showForm,
      form
    })
  }

  showModal
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundImage: 'url(http://www.powerindirt.com/images/1.jpg)',
          height: '736px',
          backgroundSize: 'fill',
          overflow: 'hidden',
          backgroundPosition: 'center'
        }}
      >
        <div style={{ marginTop: '207px' }}>
          <div className="row">
            <img
              src={logo}
              alt="Divert Durham circle logo"
              width="300px"
              height="300px"
              style={{
                borderRadius: '50%',
                marginLeft: '55px',
                marginBottom: '50px'
              }}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-3 offset-2">
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                </div>
                <div className="col-4 offset-2">
                  <Link to="/join">
                    <Button onClick={this.onClick}>Join now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
