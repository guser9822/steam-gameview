<script>
    import Game from "./widget/Game";
    import Loader from "./widget/Loader";
    import axios from "axios";
    import ViewerNamingAPI from "../../../server/viewer-naming-api";
    import WorkerLoader from "./widget/Worker-Loader";
    const { mainPathAPI, viewerPOSTS } = ViewerNamingAPI;

    export default {
        props: {},

        components: {
            Game,
            Loader,
            WorkerLoader,
        },

        data() {
            return {
                gamesList: [],
                steamID: "",
                showLoader: false,
            };
        },

        methods: {
            search() {
                if (!this.steamID.trim()) {
                    return;
                }

                this.gamesList = [];

                this.showLoader = true;
            },

            onMessageHandler(event) {
                this.showLoader = false;
                if (!event.data.body.message.response) {
                    this.gamesList = [];
                    return;
                }
                this.gamesList = event.data.body.message.response.games;
            }
        },

        computed: {
            postMessage() {
                if (!this.showLoader) {
                    return { request: this.showLoader}
                }
                const request = {
                    request: this.showLoader,
                    url:
                        "http://localhost:4000" +
                        mainPathAPI +
                        viewerPOSTS.ownedGames,
                    steamID: this.steamID
                };
                return request
            }
        }
    };
</script>

<template>
    <div>
        <Loader v-show="showLoader" />
        <div class="GamesViewer-InputBlock">
            <p class="GamesViewer-InputBlock-Paragraph">Steam ID:</p>
            <input v-model="steamID" placeholder="write here your steam id..." @blur="search()" />
        </div>

        <WorkerLoader :workerOnMessage="onMessageHandler" :workerPostMessage="postMessage">
            <div class="GamesViewer-GamesList" v-if="gamesList && gamesList.length > 0">
                <div v-for="(game,index) in this.gamesList" :key="index">
                    <Game
                        :name="game.name"
                        :logoUrl="game.img_logo_url"
                        :appid="game.appid.toString()"
                    />
                </div>
            </div>
            <div v-else>
                <p class="GamesViewer-InputBlock-Paragraph">Games list empty</p>
            </div>
        </WorkerLoader>
    </div>
</template>

.<style scoped>
    .GamesViewer-InputBlock {
        margin-bottom: 80px;
    }

    .GamesViewer-InputBlock-Paragraph {
        color: white;
    }

    .GamesViewer-GamesList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>