import PTP from '../server/viewer-naming-api'

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const app = express();
const steamAPIWrapper = require('../server/steamapi').steamAPIWrapper
//const { mainPathAPI, viewerPOSTS } = require('../server/viewer-naming-api').viewerNamingAPI

console.log("MEX "+PTP)

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* app.post(mainPathAPI + viewerPOSTS.ownedGames, (req, res) => {
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
 */
const viewerAPI = {
    viewerAPP: app
}

module.exports.viewerAPI = viewerAPI