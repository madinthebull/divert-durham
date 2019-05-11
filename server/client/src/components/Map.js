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
    console.log('this.props.locations', this.props.locations)
    const { locations } = this.props
    const coords = { lat: 36.011367, lng: -78.886195 }

    const markers1 = _.map(locations, location => location.dropOffCoordinates)
    // const markers = locations.map(location => location.dropOffCoordinates)

    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={coords}
      >
        <Marker onClick={this.onMarkerClick} name={'your home'} />
        <Marker position={{ markers1 }} />
        {/* test */}
        <Marker position={{ lat: 37.234, lng: -79 }} />
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
  return { locations: state.notifcations }
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
