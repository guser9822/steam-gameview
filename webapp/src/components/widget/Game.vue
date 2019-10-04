<template>
    <div class="Game">
        <div class="Game-Body">
            <p class="Game-Body-Paragraph">{{name}}</p>
            <img :src="fullUrlLogo" />
        </div>
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
                const {appId,logoUrl} = this
                return ! appId && ! logoUrl ? '' :
                    "http://media.steampowered.com/steamcommunity/public/images/apps/" +
                    this.appid.toString() +
                    "/" +
                    this.logoUrl +
                    ".jpg";
            }
        }
    };
</script>

<style scoped>
    .Game {
        color: white;
        margin: 10px;
        border: 2px outset whitesmoke;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        width:350px;
    }

    .Game:hover {
        transform: translate(0, -15px);
    }

    .Game-Body{
        padding: 10px;
    }

</style>