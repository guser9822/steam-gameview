const axios = require('axios')

const steamAPIUrl = 'http://api.steampowered.com/'
const playerServiceAPI = '/IPlayerService'
const getOwnedGamesEndPoint = '/GetOwnedGames'
const version = '/v0001'
const quesMark = '?'
const keyQp = 'key='
const amp = '&'
const steamIdQp = 'steamid=76561198051865267'
const format = 'format=json'
const allInfo = 'include_appinfo=true'

getOwnedGames = function () {
    return axios
        .get(steamAPIUrl + 
            playerServiceAPI + 
            getOwnedGamesEndPoint + 
            version + 
            quesMark + 
            keyQp + 
            amp + 
            steamIdQp + 
            amp + 
            format + 
            amp + 
            allInfo)
        .then(res => { console.log(res); return res; })
}

const steamAPIWrapper = {
    getOwnedGames: getOwnedGames
}

module.exports.steamAPIWrapper = steamAPIWrapper