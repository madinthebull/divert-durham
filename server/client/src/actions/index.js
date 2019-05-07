import axios from 'axios'

export const CREATE_USER = 'create_user'

const ROOT_URL = 'http://localhost:8000'

//for geocoding
const GEO_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address='

//for reverse geocoding
const REVGEO_URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='

export function createUser() {
  const request = axios.post(`${ROOT_URL}/login`)

  return {
    type: CREATE_USER,
    payload: request
  }
}
