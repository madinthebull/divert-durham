import React, { Component } from 'react'

export class Notification extends Component {
  render() {
    console.log(this.props)
    const { onWay, delivered, giverId, receiverId, timeSent } = this.props
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
        <div
          className="col-10 offset-1 shadow-sm"
          style={{
            backgroundColor: '#c8deea',
            borderRadius: '5px',
            padding: '5px',
            marginBottom: '15px'
          }}
        >
          <div style={{ float: 'right' }}>May 1</div>
          <div style={{ padding: '5px' }}>
            {' '}
            <strong>Sean D.</strong> has <strong>delivered!</strong>
          </div>
          <div>
            <small> -5 days ago</small>
          </div>
        </div>
        <div
          className="col-10 offset-1 shadow-sm"
          style={{
            backgroundColor: '#c8deea',
            borderRadius: '5px',
            padding: '5px',
            marginBottom: '15px'
          }}
        >
          <div style={{ float: 'right' }}>May 6</div>
          <div style={{ padding: '5px' }}>
            {' '}
            <strong>Aaron H.</strong> is on his way in <strong>5</strong>{' '}
            minutes!
          </div>
          <div>
            <small>-15 minutes ago</small>
          </div>
        </div>
        <div
          className="col-10 offset-1 shadow-sm"
          style={{
            backgroundColor: '#c8deea',
            borderRadius: '5px',
            padding: '5px',
            marginBottom: '15px'
          }}
        >
          <div style={{ float: 'right' }}>May 6</div>
          <div style={{ padding: '5px' }}>
            {' '}
            <strong>Aaron H.</strong> has <strong>delivered</strong>!
          </div>
          <div>
            <small> -10 minutes ago</small>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Notification
