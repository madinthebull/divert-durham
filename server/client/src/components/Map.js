import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import { fetchLocations } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { Modal } from 'reactstrap'
import ReceiverDetailView from './ReceiverDetailView'

const mapStyles = {
  width: '85%',
  height: '45%',
  position: 'fixed'
  // borderRadius: '50%'
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindo to the selected place upon a marker
    showLocationInfo: false,
    location: {}
  }

  componentDidMount() {
    this.props.fetchLocations()
  }

  toggleLocationInfo = location => {
    this.setState({ showLocationInfo: !this.state.showLocationInfo, location })
  }
  showModal = () => {
    if (this.state.showLocationInfo === true) {
      return (
        <Modal isOpen={this.state.showLocationInfo}>
          <ReceiverDetailView
            toggle={this.toggleLocationInfo}
            location={this.state.location}
          />
        </Modal>
      )
    }
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
      return (
        <Marker
          position={location.dropOffCoordinates}
          key={location._id}
          onClick={() => this.toggleLocationInfo(location)}
        />
      )
    })

    return (
      <React.Fragment>
        {this.showModal()}
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
      </React.Fragment>
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
