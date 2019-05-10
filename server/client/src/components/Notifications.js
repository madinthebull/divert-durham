import React, { Component } from 'react'
import Navbar from './Navbar'
import Notification from './Notification'
import Footer from './Footer'
import { fetchNotifications } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class Notifications extends Component {
  // when component mounts, all notifications are fetched
  componentDidMount() {
    this.props.fetchNotifications()
  }

  render() {
    if (this.props.notifications) {
      return (
        <React.Fragment>
          <Navbar />
          <div className="container" style={{ notificationsListStyle }}>
            This is the notifications component
          </div>{' '}
          <Notification
            key={this.props.notifications._id}
            onWay={this.props.notifications.onWay}
            delivered={this.props.notifications.onWay}
            giverId={this.props.notifications.giverId}
            receiverId={this.props.receiverId}
            timeSent={this.props.timeSent}
          />
          <Footer />
        </React.Fragment>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const notificationsListStyle = {
  overflowY: 'scroll'
}

// make all of our notifications from Redux store available to the component's props
const mapStateToProps = state => {
  return { notifications: state.notifications }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchNotifications }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications)
