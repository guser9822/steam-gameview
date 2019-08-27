<template>
<ul>
  <li 
    v-for="(game,index) in this.gamesList"
    :key=index>
      <Game 
        :name="game.name"
        :logoUrl="game.img_logo_url"
        :appid="game.appid.toString()"
      />
  </li>
</ul>
</template>

<script>
import Game from "./widget/Game";
import axios from "axios";

export default {
  props: {},

  components: {
    Game
  },

  data(){
    return{
      gamesList: []
    }
  },

  created() {
    axios
      .get("http://localhost:4000/steam-view-api/get-owned-games")
      .then(resp => { 
            this.gamesList = resp.data.message.response.games
          }
        );
  }
};
</script>

<style scoped>
</style>