import axios from 'axios'

const apiKey = 'AIzaSyAJJD6e0We9CFA9rI-tkvgVoEBdDpYTVhs'

export const CREATE_USER = 'create_user'
export const CONVERT_ADDRESS = 'convert_address'
export const CONVERT_COORDINATES = 'convert_coordinates'
export const FETCH_NOTIFICATIONS = 'fetch_notifications'
export const FETCH_LOCATIONS = 'fetch_locations'
export const SEND_NOTIFICATION = 'send_notification'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, X-Authentication'
}

// for db
const ROOT_URL = 'http://localhost:8000'

// for geocoding & reverse geocoding
const GEO_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'

// hardcode logged in user
const userId = '5cd6fd3418f45e82f9883902'
// post to db when a user joins Divert Durham
export function createUser(userData) {
  const request = axios.post(`${ROOT_URL}/join`)

  return {
    type: CREATE_USER,
    payload: request
  }
}

// for geocoding when a user creates their profile
export function convertAddress(address) {
  const request = axios.get(`${GEO_URL}address=${address}&key=${apiKey}`, {
    headers: CORS_HEADERS
  })

  return {
    type: CONVERT_ADDRESS,
    payload: request
  }
}
// for reverse geocoding in the receiverDetailView
export async function convertCoordinates(dropOffCoordinates) {
  const request = await axios.get(
    `${GEO_URL}latlng=${dropOffCoordinates}&key=${apiKey}`,
    {
      headers: CORS_HEADERS
    }
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
