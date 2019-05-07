import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export class Info extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div>This is the info component</div>
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

export default Info
