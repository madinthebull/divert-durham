import React, { Component } from 'react'
import Navbar from './Navbar'
// import Notification from './Notification'
import Footer from './Footer'
import { fetchNotifications } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

export class Notifications extends Component {
  // when component mounts, all notifications are fetched
  componentDidMount() {
    this.props.fetchNotifications()
  }

  renderNotifications() {
    if (this.props.notifications.notifications) {
      //  return this.props.notifications.map(notification => {
      return _.map(this.props.notifications.notifications, notification => {
        return (
          <React.Fragment>
            <div
              className="col-10 offset-1 shadow-sm"
              style={{
                backgroundColor: '#c8deea',
                borderRadius: '5px',
                padding: '5px',
                marginBottom: '15px'
              }}
              key={notification._id}
            >
              <div style={{ float: 'right' }}>May 1</div>
              <div style={{ padding: '5px' }}>
                {' '}
                <strong>Sean D.</strong> is on his way in <strong>20</strong>{' '}
                minutes!
              </div>
              <div>
                <small>-5 days ago</small>
              </div>
            </div>
            <div>{notification.giverId}</div>
            <div>{notification.timeSent}</div>
            <div>{notification.receiverId}</div>
            <div>{notification.onWay}</div>
            <div>{notification.delivered}</div>
          </React.Fragment>
        )
      })
    } else {
      return <div>Loading...</div>
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container" style={{ notificationsListStyle }}>
          This is the notifications component
        </div>{' '}
        {this.renderNotifications()}
        />
        <Footer />
      </React.Fragment>
    )
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
