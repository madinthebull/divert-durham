import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar fixed-top navbar-expand-lg mb-3" style={navStyle}>
      <div className="container-fluid">
        <div
          className="col-12"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            height: '70px'
          }}
        >
          <div
            className="row"
            style={{
              fontSize: '20px',
              verticalAlign: 'baseline',
              margin: '3%'
            }}
          >
            Compost Collective
            <br />
          </div>
        </div>
        <div className="shadow-sm col-12">
          <Link to="/Home">
            <button className="col-2" style={buttonStyle}>
              Home
            </button>
          </Link>
          <Link to="/Info">
            <button className="col-2" style={buttonStyle}>
              Info
            </button>
          </Link>
          <Link to="/Notifications">
            <button className="col-4" style={buttonStyle}>
              Notifications
            </button>
          </Link>
          <Link to="/Profile">
            <button className="col-3" style={buttonStyle}>
              Profile
            </button>
          </Link>
          <Link to="/Logout">
            <button className="col-1" style={buttonStyle}>
              {' '}
              <span role="img" aria-label="waving hand">
                👋🏽
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const navStyle = {
  //this isn't working currently
  fontFamily: 'Merriweather'
}
const buttonStyle = {
  padding: '3px'
}
