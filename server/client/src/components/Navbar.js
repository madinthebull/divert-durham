import React from 'react'
import { Link } from 'react-router-dom'

import brand from '../static/brand.png'
import leaf from '../static/leaf.png'

export default function Navbar() {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg mb-3 shadow-sm"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container">
        <div
          className="row"
          style={{ backgroundColor: '#065471', width: 'auto' }}
        >
          <div className="col-2">
            {' '}
            <img
              src={leaf}
              alt="Diver Durham leaf logo"
              width="50px"
              height="50px"
            />
          </div>
          <div className="col-9" style={{ marginLeft: '5px' }}>
            {' '}
            <img src={brand} alt="Divert Durham logo text" />
          </div>
        </div>
      </div>

      <div className="col-12">
        <Link to="/Home">
          <button className="col-3" style={buttonStyle}>
            Home
          </button>
        </Link>
        <Link to="/Map">
          <button className="col-2" style={buttonStyle}>
            Map
          </button>
        </Link>
        <Link to="/Activity">
          <button className="col-4" style={buttonStyle}>
            Activity{' '}
          </button>
        </Link>
        <Link to="/Profile">
          <button className="col-3" style={buttonStyle}>
            Profile
          </button>
        </Link>
      </div>
    </nav>
  )
}

const buttonStyle = {
  padding: '3px',
  marginTop: '3px'
}
