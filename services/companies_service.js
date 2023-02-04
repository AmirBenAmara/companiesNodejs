const config = require('../config/config')
const axios = require('axios');


module.exports.getPlaceIdByCompanyName = async (companyName) => {
    try {
        const responsePlaceId = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${companyName+',France'}&inputtype=textquery&fields=place_id&key=${config.API_KEY}`)
        const candidates = responsePlaceId.data.candidates;
            if (candidates && candidates.length) {
              return candidates[0].place_id;
            } else {
              return null;
            }
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports.getPhoneNumberByPlaceId = async (placeId) => {
    try {
        const responsePhoneNumber = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_phone_number&key=${config.API_KEY}`
          );
          return responsePhoneNumber.data.result.formatted_phone_number;            
    } catch (error) {
        console.log(error)
        return error
    }
}