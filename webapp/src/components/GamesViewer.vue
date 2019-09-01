<template>
  <div>
    <div>
      <p>Steam ID:</p>
      <input v-model="steamID" placeholder="write here your steam id..." @blur="search()" />
    </div>
    <div v-if="gamesList && gamesList.length > 0">
      <ul>
        <li v-for="(game,index) in this.gamesList" :key="index">
          <Game :name="game.name" :logoUrl="game.img_logo_url" :appid="game.appid.toString()" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Games list empty </p>
    </div>
  </div>
</template>

<script>
import Game from "./widget/Game";
import axios from "axios";
import ViewerNamingAPI from "../../../server/viewer-naming-api";
const { mainPathAPI, viewerPOSTS } = ViewerNamingAPI;

export default {
  props: {},

  components: {
    Game
  },

  data() {
    return {
      gamesList: [],
      steamID: ""
    };
  },

  created() {},

  methods: {
    search() {
      if (!this.steamID.trim()) return;

      axios
        .post("http://localhost:4000"+mainPathAPI+viewerPOSTS.ownedGames, {
          steamID: this.steamID
        })
        .then(resp => {
          if (resp.data.message.name === "Error") {
            this.gamesList = [];
            return;
          }

          this.gamesList = resp.data.message.response.games;
        });
    }
  },

  computed: {
  }
};
</script>

<style scoped>
</style>