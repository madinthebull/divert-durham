import React, { Component } from 'react'
import Navbar from './Navbar'
import Notification from './Notification'
import Footer from './Footer'

export class Notifications extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container" style={{ notificationsListStyle }}>
          This is the notifications component
        </div>{' '}
        <Notification />
        <Footer />
      </React.Fragment>
    )
  }
}

const notificationsListStyle = {
  overflowY: 'scroll'
}

export default Notifications
