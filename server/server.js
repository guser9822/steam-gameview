import ViewerAPI from "./viewierapi" 

const port = process.env.PORT || 4000;
ViewerAPI.viewerAPP.listen(port, () => {
    console.log(`listening on ${port}`);
});