import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>This is the home component</div>
        <div>Step 1: Choose a recipient on the map </div>
        <div>Step 2: Let the recipient know when you'll be on your way</div>
        <div>
          Step 3: Let the recipient know when you have delivered your scraps!{' '}
        </div>
      </React.Fragment>
    )
  }
}

export default Home
