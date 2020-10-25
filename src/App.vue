<template>
    <div id="app">
        <Hero :mobileView='mobileView'/>
        <AboutUS />
        <ImageWithText />
        <FeaturedSlider />
        <SignUpDetail />
        <Footer />
    </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import AboutUS from "@/components/AboutUS.vue";
import ImageWithText from "@/components/ImageWithText.vue";
import FeaturedSlider from "@/components/slider/FeaturedSlider.vue";
import SignUpDetail from "@/components/SignUpDetail.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "App",
    components: {
        Hero,
        AboutUS,
        ImageWithText,
        SignUpDetail,
        FeaturedSlider,
        Footer
    },

    data() {
        return {
            mobileView: false
        }
    },

    mounted() {
        this.handleResize();
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        handleResize() {
            let width = window.innerWidth;

            if(width < 768) {
                this.mobileView = true;
            } else {
                this.mobileView = false;
            }
        }
    }
};
</script>

<style lang="scss">
    $fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
    @import "~@fortawesome/fontawesome-free/scss/fontawesome";
    @import "~@fortawesome/fontawesome-free/scss/solid"; // fas
    @import "~@fortawesome/fontawesome-free/scss/regular"; // far
    @import "~@fortawesome/fontawesome-free/scss/brands"; // fab
</style>
