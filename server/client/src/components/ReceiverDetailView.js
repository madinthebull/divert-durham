import React, { Component } from 'react'

export class ReceiverDetailView extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div>This is the Receiver Detail View</div>

          <div className="row">
            <div className="col-12">
              <div className="col-6">
                <button style={{ backgroundColor: '#c8deea' }}>
                  I'm on my way
                </button>
              </div>
              <div className="col-6">
                <button style={{ backgroundColor: '#c8deea' }}>
                  delivered
                </button>
              </div>
            </div>
          </div>
          <div>1712 Avondale Drive, Durham, NC 27701</div>
          <div>https://www.google.com/maps</div>
          <div>
            These are the instructions for where you should put the food scraps
            when you get to my house
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ReceiverDetailView
