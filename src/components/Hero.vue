<template>
  <div class="hero">
      <Navigation />

      <div class="curved-bg"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.23,16.07 C238.94,151.28 238.37,149.30 503.61,20.02 L500.00,150.00 L0.00,150.00 Z"></path></svg></div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
    name: "Hero",
    components: {
        Navigation
    }
}
</script>

<style scoped lang="scss">
    .hero {
        position: relative;
        min-height: 85vh;
        widows: 100%;
        background: $primary-bg-color;

        .curved-bg {
            position: absolute;
            overflow: hidden;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40px;
            fill: $light;

            svg {
                width: 100%;
                height: 100%;
                stroke: none;
            }
        }
    }
</style>