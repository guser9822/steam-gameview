<script>
    export default {
        components: {}
    };
</script>

<template>
    <div class="Loader">
        <p class="Loader-Message">Loading....</p>
    </div>
</template>

<style>
    .Loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.8;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Loader-Message {
        font-size: xx-large;
        color: whitesmoke;
    }
</style>