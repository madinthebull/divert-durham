import React, { Component } from 'react'
import Notification from './Notification'

export class Notifications extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ notificationsListStyle }}>
          This is the notifications component
        </div>{' '}
        <Notification />
      </React.Fragment>
    )
  }
}

const notificationsListStyle = {
  overflowY: 'scroll'
}

export default Notifications
