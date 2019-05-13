import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Map from './Map'
import logo from '../static/DDlogo.png'

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container" style={{ marginTop: '120px' }}>
          <div>
            <img
              src={logo}
              width="100px"
              height="100px"
              style={{ borderRadius: '50%' }}
              alt="Divert Durham Logo"
            />
            <Map />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
