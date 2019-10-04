<script>
    import Game from "./widget/Game";
    import Loader from "./widget/Loader";
    import axios from "axios";
    import ViewerNamingAPI from "../../../server/viewer-naming-api";
    const { mainPathAPI, viewerPOSTS } = ViewerNamingAPI;

    export default {
        props: {},

        components: {
            Game,
            Loader,
        },

        data() {
            return {
                gamesList: [],
                steamID: "",
                showLoader: false
            };
        },

        created() {},

        methods: {
            search() {
                if (!this.steamID.trim()) return;
                this.showLoader = true;
                axios
                    .post(
                        "http://localhost:4000" +
                            mainPathAPI +
                            viewerPOSTS.ownedGames,
                        {
                            steamID: this.steamID
                        }
                    )
                    .then(resp => {
                        if (resp.data.message.name === "Error") {
                            this.gamesList = [];
                            this.showLoader = false;
                            return;
                        }
                        this.showLoader = false;
                        this.gamesList = resp.data.message.response.games;
                    });
            }
        },

        computed: {}
    };
</script>

<template>
    <div>
        <Loader v-show="showLoader"/>
        <div class="GamesViewer-InputBlock">
            <p class="GamesViewer-InputBlock-Paragraph">Steam ID:</p>
            <input v-model="steamID" placeholder="write here your steam id..." @blur="search()" />
        </div>
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
    </div>
</template>

.<style scoped>
    .GamesViewer-InputBlock {
        margin-bottom: 80px;
    }

    .GamesViewer-InputBlock-Paragraph{
        color: white;
    }

    .GamesViewer-GamesList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>