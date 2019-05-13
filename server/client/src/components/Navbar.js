import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../static/DDlogo.png'
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
            <img src={leaf} width="50px" height="50px" />
          </div>
          <div className="col-10">
            {' '}
            <img src={brand} />
          </div>
        </div>
      </div>

      <div className="col-12">
        <Link to="/Home">
          <button className="col-3" style={buttonStyle}>
            Home
          </button>
        </Link>
        <Link to="/Info">
          <button className="col-2" style={buttonStyle}>
            Info
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
