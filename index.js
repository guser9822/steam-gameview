const viewerAPI = require('./server/viewierapi.js').viewerAPI

const port = process.env.PORT || 4000;
viewerAPI.viewerAPP.listen(port, () => {
    console.log(`listening on ${port}`);
});