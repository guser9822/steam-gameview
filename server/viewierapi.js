const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const app = express();
const steamAPIWrapper = require('../server/steamapi.js').steamAPIWrapper

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const steamViewAPI = '/steam-view-api'
const getOwnedGames = '/get-owned-games'

/* app.get(steamViewAPI + getOwnedGames, (req, res) => {
    steamAPIWrapper.getOwnedGames().
    then(steamRes => {
        res.json({
            message: steamRes.data
        });
    })
    .catch(e => {
        console.error(e)
        res.json({
            message: e
        });
    })
}); */

app.post(steamViewAPI + getOwnedGames, (req, res) => {
    var steamID = req.body.steamID
    steamAPIWrapper.getOwnedGames(steamID).
    then(steamRes => {
        res.json({
            message: steamRes.data
        });
    })
    .catch(e => {
        console.error(e)
        res.json({
            message: e
        });
    })
});

let viewerAPI = {
    viewerAPP: app
}

module.exports.viewerAPI = viewerAPI