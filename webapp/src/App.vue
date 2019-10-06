<template>
    <div id="app">
        <MainPage />
    </div>
</template>

<script>
    import MainPage from "./components/MainPage.vue";
    import Worker from "./util/file.worker";

    export default {
        name: "app",

        mounted() {

            const worker = new Worker("file.worker.js");

            worker.onmessage = event => {
                console.log("Worker said: ", event.data);
            };

            worker.postMessage("Execute heavy task");
        },

        components: {
            MainPage
        },

        methods: {
            heavyTask() {
                console.log("Heavy task");
            }
        }
    };
</script>

<style>
    html,
    body {
        background: url(./assets/colored_body_top2.png) center top no-repeat #1b2838;
        height: 100vh;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
