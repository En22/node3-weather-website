const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1632818c52a1e3ce77b8ddf55336e840&query='+ latitude +','+ longitude +'&units=m'
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback( undefined, body.current.weather_descriptions[0] + 
                '. It is currently ' + body.current.temperature + 
                ' degrees out. It feels like ' + body.current.feelslike + 
                ' degrees out. The wind direction is: ' + body.current.wind_dir +
                ' .The Wind Speed is: ' + body.current.wind_speed + ' Km/h.')
        }
    })
}

module.exports = forecast