import axios from 'axios'

//const apiKey = 'AIzaSyAJJD6e0We9CFA9rI-tkvgVoEBdDpYTVhs'
const apiKey = 'AIzaSyAJJD6e0We9CFA9rI-tkvgVoEBdDpYTVhs'

export const CREATE_USER = 'create_user'
export const CONVERT_ADDRESS = 'convert_address'
export const CONVERT_COORDINATES = 'convert_coordinates'
export const FETCH_NOTIFICATIONS = 'fetch_notifications'
export const FETCH_LOCATIONS = 'fetch_locations'
export const SEND_NOTIFICATION = 'send_notification'

// for db
const ROOT_URL = 'http://localhost:8000'

// for geocoding & reverse geocoding
const GEO_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'

// hardcode logged in user
const userId = '5cd6fd3418f45e82f9883902'

// post to db when a user joins Divert Durham
export function createUser(newUserData) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/join`,
    data: newUserData
  })

  return {
    type: CREATE_USER,
    payload: request
  }
}

// for geocoding when a user creates their profile
export async function convertAddress(address) {
  const request = await axios.get(`${GEO_URL}address=${address}&key=${apiKey}`)

  const convertedAddress = await request.data.results[0]

  return {
    type: CONVERT_ADDRESS,
    payload: convertedAddress.geometry.location
  }
}
// for reverse geocoding in the receiverDetailView
export function convertCoordinates(dropOffCoordinates) {
  const request = axios.get(
    `${GEO_URL}latlng=${dropOffCoordinates}&key=${apiKey}`
  )

  return {
    type: CONVERT_COORDINATES,
    payload: request
  }
}

// get all notifications for the logged in user
export function fetchNotifications() {
  const request = axios.get(`${ROOT_URL}/notifications/${userId}`)

  return {
    type: FETCH_NOTIFICATIONS,
    payload: request
  }
}

// get all receivers actively receiving compost
export function fetchLocations() {
  const request = axios.get(`${ROOT_URL}/locations`)

  return {
    type: FETCH_LOCATIONS,
    payload: request
  }
}

// send notification
export function sendNotification(notification) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/notifications`,
    data: notification
  })

  return {
    type: SEND_NOTIFICATION,
    payload: request
  }
}
