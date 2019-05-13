import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Map from './Map'

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container" style={{ marginTop: '120px' }}>
          <div>
            <Map />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
