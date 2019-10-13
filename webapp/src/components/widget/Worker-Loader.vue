<template>
    <div>
        <slot :data="fetchedData"></slot>
    </div>
</template>

<script>
    import GameViewsWorker from "../../workers/game-viewer.worker";

    export default {
        data() {
            return {
                fetchedData: null,
                workerUnit: new GameViewsWorker("game-viewer.worker.js")
            };
        },
        props: {
            workerOnMessage: {
                type: Function,
                required: true
            },
            workerPostMessage: {
                type: Object,
                required: true
            }
        },
        methods: {
            /*             handleChange() {
                                this.fetchedData = this.selectData(DataSource, this.$props);
                            } */
        },
        mounted() {
            this.workerUnit.onmessage = this.workerOnMessage; //attach listener on the worker
        },

        beforeDestroy() {
            this.workerUnit.terminate();
        },

        computed: {
            postMessage() {}
        },

        watch: {
            workerPostMessage: {
                handler(val) {
                    if (!val["request"]) {
                        return;
                    }
                    this.workerUnit.postMessage(val);
                }
            }
        }
    };
</script>

<style>
</style>