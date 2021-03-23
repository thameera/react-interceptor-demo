const axios = require('axios')

export const makeRequest = async (path, token) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `http://localhost:3001${path}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return res.data
  } catch (e) {
    console.log('Error calling API')
    console.log(e)
    return e
  }
}