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
          <div className="row">
            <div className="col-3">
              <img
                src={logo}
                width="100px"
                height="100px"
                style={{ borderRadius: '50%', marginBottom: '15px' }}
                alt="Divert Durham Logo"
              />
            </div>
            <div className="col-9" style={{ textAlign: 'center' }}>
              <h6 style={{ verticalAlign: 'center', color: '#99C5B9' }}>
                Start Composting Now!
              </h6>
            </div>
          </div>
          <div className="row ml-2">
            {' '}
            <Map />{' '}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
