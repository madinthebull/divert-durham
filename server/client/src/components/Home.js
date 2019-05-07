import React, { Component } from 'react'
// import Map from './Map'

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="col-12">
            <div className="row mb-3">
              <div
                className="col-3"
                style={{
                  color: 'white',
                  backgroundColor: '#00548f',
                  borderRadius: '8px'
                }}
              >
                <div>Step 1:</div>
              </div>
              <div className="col-9">
                {' '}
                Choose a recipient of your food scraps on the map{' '}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row mb-3">
              <div
                className="col-3"
                style={{
                  color: 'white',
                  backgroundColor: '#00548f',
                  borderRadius: '8px'
                }}
              >
                <div> Step 2:</div>
              </div>
              <div className="col-9">
                {' '}
                Let the recipient know when you'll be on your way
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row mb-3">
              <div
                className="col-3"
                style={{
                  color: 'white',
                  backgroundColor: '#00548f',
                  borderRadius: '8px'
                }}
              >
                <div>Step 3:</div>
              </div>
              <div className="col-9">
                {' '}
                Let the recipient know when you have delivered your scraps!
              </div>
            </div>
          </div>
          <div style={{ margin: '10px' }}>{/* <Map /> */}</div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
