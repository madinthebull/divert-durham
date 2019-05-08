import React, { Component } from 'react'
import styled from 'styled-components'

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
  render() {
    return (
      <React.Fragment>
        <ViewWrapper>
          <div
            className="container shadow-sm"
            style={{ paddingBottom: '10px' }}
          >
            <div style={{ float: 'right' }}>
              <i class="far fa-times-circle" />
            </div>
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
                  <div className="col-5 offset-1">
                    <p>I'll be there in</p>
                    <Button>5</Button>
                    <Button>10</Button>
                    <Button>20</Button>
                  </div>
                  <div className="col-6">
                    <p>Ready to deliver?</p>
                    <Button>Delivered</Button>
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
              Seeds Community Garden
            </h5>
            <h4 style={{ textAlign: 'center', color: '#00548f' }}>
              1712 Avondale Drive, Durham, NC 27701
            </h4>
            <div style={{ textAlign: 'center' }}>
              {' '}
              <a href="https://www.google.com/maps">Get Directions</a>
            </div>
            <hr />

            <div style={{ textAlign: 'center', marginBottom: '5px' }}>
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
                <small>
                  These are the instructions for where you should put the food
                  scraps when you get to my house Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </small>
              </p>
            </div>
          </div>
        </ViewWrapper>
      </React.Fragment>
    )
  }
}

export default ReceiverDetailView
