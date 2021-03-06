import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  background-color: #c8deea;
  margin: 3px;
  border-radius: 5px;
  border: transparent;
`
export class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ textAlign: 'center' }}> This is the landing page</div>
        <div className="row">
          <div className="col-12 offset-4">
            <Hexagon>Divert Durham</Hexagon>
          </div>
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
    )
  }
}

export default Landing
