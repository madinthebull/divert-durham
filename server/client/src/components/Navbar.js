import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarBrand = styled.div`
  font-family: 'Arvo', serif;
  margin-left: 1%;
`
const Button = styled.button`
  padding: 2%;
`

const Nav = styled.nav`
  font-family: 'Arvo', serif;
`
export default function Navbar() {
  return (
    <Nav className="navbar navbar-light fixed-top navbar-expand-lg mb-3 py-1">
      <div className="container-fluid">
        <NavbarBrand>Compost Collective</NavbarBrand>{' '}
        <form className="form-inline ml-auto navbar-right">
          <Link to="/Home">
            <Button>Home</Button>
          </Link>
          <Link to="/Info">
            <Button>Info</Button>
          </Link>
          <Link to="/Notifications">
            <Button>Notifications</Button>
          </Link>
          <Link to="/Profile">
            <Button>Profile</Button>
          </Link>
          <Link to="/Logout">
            <Button>
              {' '}
              <span role="img" aria-label="waving hand">
                👋🏽
              </span>
            </Button>
          </Link>
        </form>
      </div>
    </Nav>
  )
}
