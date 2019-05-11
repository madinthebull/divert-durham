import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import { fetchLocations } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

const mapStyles = {
  width: '85%',
  height: '60%',
  position: 'fixed'
  // borderRadius: '50%'
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindo to the selected place upon a marker
  }

  componentDidMount() {
    this.props.fetchLocations()
    console.log('this.props', this.props)
  }

  // show the infoWindow popup (component from the library) with details of the clicked place/marker
  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }
  // close the infoWindow once a user clicks on the close button on the infoWindow
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    // show marker for the user's home address
    const coords = { lat: 36.011367, lng: -78.886195 }

    // show all users actively accepting compost
    const Locations = _.map(this.props.locations.locations, location => {
      return <Marker position={location.dropOffCoordinates} />
    })

    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={coords}
      >
        <Marker onClick={this.onMarkerClick} name={'your home'} />
        {Locations}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

const mapStateToProps = state => {
  return { locations: state.locations }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchLocations }, dispatch)
}

// WAY 2
const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyAJJD6e0We9CFA9rI-tkvgVoEBdDpYTVhs'
})(MapContainer)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedContainer)

// WAY 1 this worked before redux
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAJJD6e0We9CFA9rI-tkvgVoEBdDpYTVhs'
// })(MapContainer)

// Way 3
// export const ConnectContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(
//   GoogleApiWrapper({
//     apiKey: 'AIzaSyAJJD6e0We9CFA9rI-tkvgVoEBdDpYTVhs'
//   })(MapContainer)
// )
