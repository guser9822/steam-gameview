import axios from 'axios'
import STEAM_KEY from './mySteamKey'

const steamAPIUrl = 'http://api.steampowered.com/'
const playerServiceAPI = '/IPlayerService'
const getOwnedGamesEndPoint = '/GetOwnedGames'
const version = '/v0001'
const quesMark = '?'
const keyQp = 'key=' + STEAM_KEY
const amp = '&'
const steamIdQp = 'steamid='
const format = 'format=json'
const allInfo = 'include_appinfo=true'

const getOwnedGames = function (aSteamID) {
    return axios
        .get(steamAPIUrl +
            playerServiceAPI +
            getOwnedGamesEndPoint +
            version +
            quesMark +
            keyQp +
            amp +
            steamIdQp + aSteamID +
            amp +
            format +
            amp +
            allInfo)
        .then(res => {  console.log(res); return res; })
}

const SteamAPIWrapper = {
    getOwnedGames: getOwnedGames
}

export default SteamAPIWrapper