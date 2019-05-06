import React, { Component } from 'react'

export class Notification extends Component {
  render() {
    return (
      <div
        className="col-8 offset-2"
        style={{ backgroundColor: '#ddd', borderRadius: '5px', padding: '5px' }}
      >
        <div style={{ float: 'right' }}>May 1</div>
        <div> SEAN is on his way in 20 minutes!</div>
        <div> -5 days ago</div>
      </div>
    )
  }
}

export default Notification
