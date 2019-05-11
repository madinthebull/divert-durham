import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Map from './Map'

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="col-12">
            <div className="row mb-3">
              <div className="col-3" style={stepStyle}>
                <div>
                  <strong>Step 1:</strong>
                </div>
              </div>
              <div className="col-9">
                {' '}
                Choose a recipient of your food scraps on the map{' '}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row mb-3">
              <div className="col-3" style={stepStyle}>
                <div>
                  <strong>Step 2:</strong>
                </div>
              </div>
              <div className="col-9">
                {' '}
                Let the recipient know when you'll be on your way
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row mb-3">
              <div className="col-3" style={stepStyle}>
                <div>
                  <strong>Step 3:</strong>
                </div>
              </div>
              <div className="col-9">
                {' '}
                Let the recipient know when you have delivered your scraps!
              </div>
            </div>
          </div>
          <div style={{ marginTop: '10px' }}>
            <Map />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

const stepStyle = {
  color: '#00548f',
  backgroundColor: '#c8deea',
  borderRadius: '8px'
}
export default Home
