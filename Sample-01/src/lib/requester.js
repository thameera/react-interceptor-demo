const axios = require('axios')

export const makeRequest = async (path) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `http://localhost:3001${path}`
    })

    return res.data
  } catch (e) {
    console.log('Error calling API')
    console.log(e)
    return e
  }
}