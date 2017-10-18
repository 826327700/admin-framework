<template>
<transition name="fade" mode="out-in">
    <router-view></router-view>
</transition>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>
<style lang="sass">
	@import './app';
</style>