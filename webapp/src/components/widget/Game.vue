<template>
  <div>
    <p>{{this.name}}</p>
    <img :src="this.fullUrlLogo" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    logoUrl: {
      type: String
    },
    appid: {
      type: String
    }
  },

  computed: {
    fullUrlLogo() {
      return (
        "http://media.steampowered.com/steamcommunity/public/images/apps/" +
        this.appid.toString() +
        "/" +
        this.logoUrl +
        ".jpg"
      );
    }
  }
};
</script>

<style scoped>
</style>