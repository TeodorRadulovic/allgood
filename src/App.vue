<template>
    <div id="app">
        <Hero />
        <ImageWithText />
        <SignUpDetail />

    </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import ImageWithText from "@/components/ImageWithText.vue";
import SignUpDetail from "@/components/SignUpDetail.vue";

export default {
    name: "App",
    components: {
        Hero,
        ImageWithText,
        SignUpDetail
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
