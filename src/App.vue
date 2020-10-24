<template>
    <div id="app">
        <Hero />
    </div>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
    name: "App",
    components: {
        Hero
    },
};
</script>

<style lang="scss">
    $fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
    @import "~@fortawesome/fontawesome-free/scss/fontawesome";
    @import "~@fortawesome/fontawesome-free/scss/solid"; // fas
    @import "~@fortawesome/fontawesome-free/scss/regular"; // far
    @import "~@fortawesome/fontawesome-free/scss/brands"; // fab
</style>
