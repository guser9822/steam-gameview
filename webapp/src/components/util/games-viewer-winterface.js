import Worker from "../../workers/game-viewer.worker";

const gameViewerWorker = new Worker("game-viewer.worker.js");
const GamesViewerWorker = gameViewerWorker

export default GamesViewerWorker