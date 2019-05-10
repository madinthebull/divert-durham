import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

const mapStyles = {
  width: '60%',
  height: '60%',
  position: 'relative'
  // borderRadius: '50%'
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindo to the selected place upon a marker
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

  icons = {
    home: {
      icon: ''
    }
  }
  render() {
    const coords = { lat: 36.011367, lng: -78.886195 }
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={coords}
      >
        <Marker onClick={this.onMarkerClick} name={'your home'} />

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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAJJD6e0We9CFA9rI-tkvgVoEBdDpYTVhs'
})(MapContainer)
