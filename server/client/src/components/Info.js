import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import logo from '../static/DDlogo.png'

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
                'url(https://www.openaccessgovernment.org/wp-content/uploads/2018/10/dreamstime_s_99642403.jpg)',
              // 'url(http://ourcanadaproject.ca/wp-content/uploads/2014/11/Community-Garden.jpg)',
              height: '200px',
              backgroundSize: 'fill',
              overflow: 'hidden',
              backgroundPosition: 'center',
              marginBottom: '10px',
              color: '#ffbf46'
            }}
          >
            <strong style={{ padding: '10px 0px 0px 10px' }}>
              compost and <br />
              community can keep
              <br /> food waste out <br />
              of here
            </strong>
          </div>

          <div className="row">
            <div
              className="col-12 shadow-sm"
              style={{
                textAlign: 'center',
                color: '#065471'
              }}
            >
              <strong>How it Works </strong>
            </div>
          </div>

          <div className="row mt-3 mb-3">
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
              className="col-12 shadow-sm"
              style={{
                textAlign: 'center',
                color: '#065471'
              }}
            >
              <strong>Why Participate</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mt-3 mb-3" style={{ textAlign: 'center' }}>
              <small>
                Keep unneccessary food waste out of Durham's waste system
              </small>
            </div>
            <div className="col-4 mt-3 mb-3">
              <img
                src={logo}
                alt="Divert Durham circle logo"
                width="75px"
                height="75px"
                style={{ borderRadius: '50%' }}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 shadow-sm"
              style={{
                textAlign: 'center',
                color: '#065471'
              }}
            >
              <strong>What Can Be Composted?</strong>
            </div>
          </div>

          <div className="row" style={{ color: '#067154' }}>
            <div className="col-12 mt-3" style={{ marginBottom: '50px' }}>
              <small>
                <div className="row">
                  <div className="col-6" style={{ borderRadius: '9px' }}>
                    Fruit and vegetable scraps
                  </div>
                  <div className="col-6">Meat, bones, fish products</div>
                  <div className="col-6">Pasta, bread, cereal</div>

                  <div className="col-6">Cooked foods</div>
                  <div className="col-6">Dairy products, egg shells</div>
                  <div className="col-6">
                    Coffee grounds, filters, & tea bags{' '}
                  </div>
                  <div className="col-6">
                    Paper towels, plates, and paper towel rolls{' '}
                  </div>
                  <div className="col-6">Soiled paper food packaging</div>
                  <div className="col-6">Paper fast food packaging </div>
                  <div className="col-6">Pizza boxes </div>
                  <div className="col-6">Muffin wrappers</div>
                  <div className="col-6">Flour and sugar bags</div>
                  <div className="col-6">Candies, cookies and cake </div>
                  <div className="col-6">
                    Baking ingredients, herbs, spices{' '}
                  </div>
                  <div className="col-6">Household plants including soil </div>
                  <div className="col-6">Pet food </div>
                  <div className="col-6">
                    Items labeled BPI Certified Compostable
                  </div>
                  <div className="col-6">
                    Items labeled ASTM D6400 or D6868{' '}
                  </div>
                </div>
              </small>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Info
