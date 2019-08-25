const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const steamAPIWrapper = require('../server/steamapi.js').steamAPIWrapper

app.use(morgan('tiny'));
app.use(cors());

const steamViewAPI = '/steam-view-api'
const getOwnedGames = '/get-owned-games'

app.get(steamViewAPI + getOwnedGames, (req, res) => {
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
});

let viewerAPI = {
    viewerAPP: app
}

module.exports.viewerAPI = viewerAPI