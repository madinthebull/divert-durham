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
          <div></div>
            <div className="row">
            <p>Ready to deliver?</p>
              <div className="col-12">
                <div className="row">
                  {' '}
                  <div className="col-6">
                    <Button>I'm on my way</Button>
                  </div>
                  <div className="col-6">
                    <Button>Delivered</Button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h3 style={{ textAlign: 'center' }}>
              1712 Avondale Drive, Durham, NC 27701
            </h3>
            <div style={{ textAlign: 'center' }}>
              {' '}
              <a href="https://www.google.com/maps">Get Directions</a>
            </div>
<hr />

            <div style={{ textAlign: 'center' }}>Instructions For Drop Off</div>
            <div
              style={{
                backgroundColor: 'pink',
                overflowY: 'scroll',
                maxHeight: '150px',
                padding: '5px'
              }}
            >
              These are the instructions for where you should put the food
              scraps when you get to my house Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </div>
          </div>
        </ViewWrapper>
      </React.Fragment>
    )
  }
}

export default ReceiverDetailView
