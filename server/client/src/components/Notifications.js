import React, { Component } from 'react'
import Notification from './Notification'

export class Notifications extends Component {
  render() {
    return (
      <React.Fragment>
        <div>This is the notifications component</div> <Notification />
      </React.Fragment>
    )
  }
}

export default Notifications
