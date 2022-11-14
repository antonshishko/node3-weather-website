const request = require('request')


const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=c0779af21f8a8a17d86cff85cf06ca37&query='+ encodeURIComponent(address) +'&limit=1'

    request({url, json : true}, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.data.length === 0)  {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }
    })

}


module.exports = geocode