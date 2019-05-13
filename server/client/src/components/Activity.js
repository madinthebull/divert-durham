import React, { Component } from 'react'
import Navbar from './Navbar'
// import Notification from './Notification'
import Footer from './Footer'
import { fetchNotifications } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import moment from 'moment'

export class Activity extends Component {
  // when component mounts, all notifications are fetched
  componentDidMount() {
    this.props.fetchNotifications()
  }

  renderNotifications() {
    if (this.props.notifications.notifications) {
      console.log(
        'this.props.notifications.notifcations',
        this.props.notifications.notifications
      )
      return _.map(this.props.notifications.notifications, notification => {
        if (notification.onWay === true) {
          return (
            <React.Fragment key={notification._id}>
              <div
                className="col-10 offset-1 shadow-sm"
                style={{
                  backgroundColor: '#99C5B9',
                  borderRadius: '5px',
                  padding: '5px',
                  marginBottom: '15px'
                }}
              >
                <div style={{ float: 'right', paddingRight: '8px' }}>
                  {' '}
                  {moment(notification.timeSent).format('MMM Do')}
                </div>
                <div style={{ padding: '5px' }}>
                  {' '}
                  <strong>{notification.receiverId.username}</strong> is on
                  their way!
                </div>
                <div>
                  <small>-{moment(notification.timeSent).fromNow()}</small>
                </div>
              </div>
            </React.Fragment>
          )
        } else if (notification.delivered === true) {
          return (
            <React.Fragment key={notification._id}>
              <div
                className="col-10 offset-1 shadow-sm"
                style={{
                  backgroundColor: '#FFD689',
                  borderRadius: '5px',
                  padding: '5px',
                  marginBottom: '15px'
                }}
              >
                <div style={{ float: 'right', paddingRight: '8px' }}>
                  {moment(notification.timeSent).format('MMM Do')}
                </div>
                <div style={{ padding: '5px' }}>
                  {' '}
                  <strong>{notification.receiverId.username}</strong> has
                  delivered.
                </div>
                <div>
                  <small> -{moment(notification.timeSent).fromNow()}</small>
                </div>
              </div>
              {/* <div>{notification.giverId.username}</div> */}
            </React.Fragment>
          )
        }
      })
    } else {
      return <div>Loading...</div>
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container" style={notificationsListStyle}>
          {this.renderNotifications()}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

const notificationsListStyle = {
  overflowY: 'scroll',
  marginTop: '120px'
}

// make all of our notifications from Redux store available to the component's props
const mapStateToProps = state => {
  return { notifications: state.notifications, address: state.address }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchNotifications
    },
    dispatch
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity)
