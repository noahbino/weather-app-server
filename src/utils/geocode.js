const request = require('request')

const geocode = (address, callback) => {
    const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibm9haGlhcnJvYmlubyIsImEiOiJjbDFxeHI0d3AwdTFwM2pvaDk1NnAyc21rIn0.RI09d2pd8EmzN0o_Dkl1tg&limit=1'

    request({ url: geocodeurl, json: true}, (error, { body } ) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                lcoation: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode