<template>
    <div class="hero">
        <Navigation />

        <!-- Hero content -->
        <div class="content content-wrapper flex-layout">

            <!-- Icon list -->
            <div class="icon-list w-50 d-flex align-center flex-column">
                <!-- 1 -->
                <div class="icon-content d-flex justify-between align-center green">
                    <i class="fas fa-hand-holding-usd"></i>
                    <p>Turn your stuff into cash donations</p>
                </div>
                <!-- 2 -->
                <div class="icon-content d-flex justify-between align-center blue">
                    <i class="fas fa-mobile-alt"></i>
                    <p>Turn your stuff into cash donations</p>
                </div>
                <!-- 3 -->
                <div class="icon-content d-flex justify-between align-center red">
                    <i class="far fa-heart"></i>
                    <p>Turn your stuff into cash donations</p>
                </div>
            </div>

            <!-- Img -->
            <div class="hero-img w-50">
                <img :src="img" alt="hero-image">
            </div>

        </div>


        <!-- Curved line -->
        <div class="curved-bg"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.23,16.07 C238.94,151.28 238.37,149.30 503.61,20.02 L500.00,150.00 L0.00,150.00 Z"></path></svg></div>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import img from '@/assets/media/Image-main.png'

export default {
    name: "Hero",
    components: {
        Navigation
    },

    data() {
        return {
            img
        }
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

        .content {
            margin-top: 50px;
            .hero-img {
                img {
                    width: 80%;
                }
            }

            .icon-list {
                .icon-content {
                    margin-bottom: 20px;
                    border-radius: 12px;
                    height: 60px;
                    padding-right: 30px;
                    color: $light;
                    background: $dark-blue;

                    i {
                        width: 62px;
                        height: 62px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 22%;
                        transform: translateX(-5px);
                        color: $dark;
                        font-size: 28px;
                    }

                    &.green {
                        border: 2px solid $green;
                        i {
                            background: $green;
                        }
                    }
                    &.blue {
                        border: 2px solid $blue;
                        i {
                            background: $blue;
                        }
                    }
                    &.red {
                        i {
                            background: $red;
                        }                       
                        border: 2px solid $red;
                    }
                }
            }
        }
    }
</style>