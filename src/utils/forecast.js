const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1f0969f1edfd974e91fc4f581687de54&query=' + lat + ',' + long + '&units=f'

    request({ url: url, json: true }, (error, { body } ) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                precipitation: body.current.precip
            })
        }
    })
}

 module.exports = forecast