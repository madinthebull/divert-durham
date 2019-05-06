import React, { Component } from 'react'

export class Info extends Component {
  render() {
    return (
      <React.Fragment>
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
              className="col-12"
              style={{ backgroundColor: '#ddd', textAlign: 'center' }}
            >
              What Can I Compost?
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Info
