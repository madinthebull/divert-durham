import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../static/DDlogo.png'

const Hexagon = styled.div`
  width: 100px;
  height: 55px;
  background-color: #00548f;
  position: relative;
  margin: 50px 0px 50px 0px;
  color: white;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 25px solid #00548f;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 25px solid #00548f;
  }
`
const Button = styled.button`
  background-color: #white;
  margin: 3px;
  border-radius: 5px;
  border: transparent;
`

export class Landing extends Component {
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
            {/* <Hexagon className="shadow-sm">Divert Durham</Hexagon> */}
            <img
              src={logo}
              width="300px"
              height="300px"
              style={{
                borderRadius: '50%',
                marginLeft: '50px',
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
