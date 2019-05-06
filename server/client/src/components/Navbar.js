import React from 'react'
import { Link } from 'react-router-dom'
import stars from '../static/durhamstars.png'
export default function Navbar() {
  return (
    <div className="navbar fixed-top navbar-expand-lg mb-3">
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: '#00548f' }}>
          <div className="col-1" style={{ backgroundColor: '#ef3e42' }} />
          <div className="col-1" style={{ backgroundColor: '#ffcf47' }} />
          <div
            className="col-5 brand"
            style={{
              backgroundColor: '#00548f',
              color: 'white',
              textAlign: 'center',
              fontSize: '25px',
              fontFamily: 'Domine'
            }}
          >
            Divert Durham{' '}
          </div>
          <img
            className="col-5"
            src={stars}
            alt="stars of Durham City flag"
            width="250px"
            height="100px"
          />
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
  )
}

const buttonStyle = {
  padding: '3px'
}
