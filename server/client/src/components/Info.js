import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export class Info extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container" style={{ marginTop: '120px' }}>
          <div
            className="row"
            style={{
              backgroundImage:
                'url(http://ourcanadaproject.ca/wp-content/uploads/2014/11/Community-Garden.jpg)',
              height: '200px',
              backgroundSize: 'fill',
              overflow: 'hidden',
              backgroundPosition: 'center'
            }}
          />
          <div className="row">
            <div
              className="card"
              style={{ width: '7rem', margin: '10px 10px 10px 18px' }}
            >
              <h6
                className="card-header"
                style={{ backgroundColor: '#99C5B9' }}
              >
                Step 1
              </h6>
              <div className="card-body shadow-sm">
                <p className="card-text">
                  <small>Choose a recipient on the map to donate to</small>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: '7rem', margin: '10px' }}>
              <h6
                className="card-header"
                style={{ backgroundColor: '#99C5B9' }}
              >
                Step 2
              </h6>
              <div className="card-body shadow-sm">
                <p className="card-text">
                  <small>Let the recipient know when you're on your way</small>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: '7rem', margin: '10px' }}>
              <h6
                className="card-header"
                style={{ backgroundColor: '#99C5B9' }}
              >
                Step 3
              </h6>
              <div className="card-body shadow-sm">
                <p className="card-text">
                  <small>Let the recipient know when you have delivered</small>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-12"
              style={{ backgroundColor: '#ddd', textAlign: 'center' }}
            >
              Why?
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 mt-3"
              style={{ backgroundColor: '#ddd', textAlign: 'center' }}
            >
              What Can I Compost? <br />
              Fruit and vegetable scraps Meat, bones, fish products Pasta,
              bread, cereal Cooked foods Dairy products, egg shells Coffee
              grounds, filters, & tea bags Paper towels and paper towel rolls
              Soiled paper food packaging Paper fast food packaging Pizza boxes
              Muffin wrappers Flour and sugar bags Paper plates Candies, cookies
              and cake Baking ingredients, herbs, spices Household plants
              including soil Pet food Items labeled BPI Certified Compostable
              Items labeled ASTM D6400 or D6868
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

const stepStyle = {
  color: '#065471',
  backgroundColor: '#80B6A7',
  borderRadius: '8px'
}

export default Info
