import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ModalBody } from 'reactstrap'
import { sendNotification, convertCoordinates } from '../actions/index'
import moment from 'moment'

const ViewWrapper = styled.div`
  margin: 5px;
  padding: 5px;
`

const Button = styled.button`
  border-radius: 5px;
  background-color: #c8deea;
  border: transparent;
  text-align: center;
  margin-right: 5px;
`

export class ReceiverDetailView extends Component {
  state = {
    onWay: false,
    delivered: false,
    giverId: '5cd6fdba87f9428302daeaa1',
    receiverId: '5cda039b6eddc2776da9972c',
    timeSent: ''
  }

  onWayNotification = async e => {
    // get the date/time
    const date = await moment()

    this.setState({
      onWay: !this.state.onWay,
      delivered: false,
      // get how long ago the notification was sent
      timeSent: date
    })
    const { onWay, delivered, giverId, receiverId, timeSent } = this.state

    const notification = {
      onWay,
      delivered,
      giverId,
      receiverId,
      timeSent
    }

    await this.props.sendNotification(notification)
    e.preventDefault()
  }

  deliveredNotification = async e => {
    const date = await moment()

    this.setState({
      delivered: !this.state.delivered,
      onWay: false,
      timeSent: date
    })
    const { onWay, delivered, giverId, receiverId, timeSent } = this.state

    const notification = {
      onWay,
      delivered,
      giverId,
      receiverId,

      timeSent
    }

    await this.props.sendNotification(notification)
    e.preventDefault()
  }

  render() {
    console.log('this.props', this.props)
    const {
      dropOffInstructions,
      dropOffCoordinates,
      dropOffLocation,
      dropOff
    } = this.props.location

    console.log('dropOffCoordinates:', dropOffCoordinates)
    // const address = this.props.convertCoordinates(dropOffCoordinates)
    // console.log('address:', address)
    return (
      <React.Fragment>
        <ModalBody>
          <ViewWrapper>
            <div
              className="container shadow-sm"
              style={{ paddingBottom: '10px' }}
            >
              <button style={{ float: 'right' }}>
                <i
                  className="far fa-times-circle"
                  onClick={this.props.toggle}
                />
              </button>
              <div
                style={{
                  textAlign: 'center',
                  paddingTop: '10px',
                  paddingBottom: '5px'
                }}
              >
                <strong>Take Action</strong>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    {' '}
                    <div className="col-4 offset-1">
                      <div className="row">
                        {' '}
                        <p>Let them know when you're heading over</p>
                      </div>
                      <div className="row">
                        {' '}
                        <Button
                          name="onWay"
                          value={this.state.delivered}
                          onClick={this.onWayNotification}
                        >
                          On my way
                        </Button>
                      </div>
                    </div>
                    <div className="col-1">
                      <h4>&</h4>
                    </div>
                    <div className="col-4 offset-1">
                      <div className="row">
                        {' '}
                        <p>Let them know when you've dropped off</p>
                      </div>
                      <div className="row">
                        {' '}
                        <Button
                          name="delivered"
                          value={this.state.delivered}
                          onClick={this.deliveredNotification}
                        >
                          Delivered
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <h5
                style={{
                  textAlign: 'center',
                  paddingBottom: '5px',
                  color: '#00548f'
                }}
              >
                {dropOffLocation}{' '}
              </h5>
              <h4 style={{ textAlign: 'center', color: '#00548f' }}>
                {dropOff}
              </h4>
              <div style={{ textAlign: 'center' }}>
                {' '}
                <a href="https://www.google.com/maps">Get Directions</a>
              </div>
              <hr />

              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '5px'
                }}
              >
                <strong>Instructions For Drop Off</strong>
              </div>
              <div
                style={{
                  border: 'solid #c8deea',
                  overflowY: 'scroll',
                  maxHeight: '150px',
                  padding: '5px'
                }}
              >
                <p>
                  <small>{dropOffInstructions}</small>
                </p>
              </div>
            </div>
          </ViewWrapper>
        </ModalBody>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendNotification: notification => dispatch(sendNotification(notification)),
    convertCoordinates: coordinates => dispatch(convertCoordinates(coordinates))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(ReceiverDetailView)
