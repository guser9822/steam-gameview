import SteamAPIWrapper from "./steamapi";
import ViewerNamingAPI from "./viewer-naming-api";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const { mainPathAPI, viewerPOSTS } = ViewerNamingAPI;

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post(mainPathAPI + viewerPOSTS.ownedGames, (req, res) => {
    var steamID = req.body.steamID
    SteamAPIWrapper.getOwnedGames(steamID).
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

const ViewerAPI = {
    viewerAPP: app
}

export default ViewerAPI