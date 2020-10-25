<template>
    <div class="hero">
        <Navigation :mobileView="this.mobileView" />

        <!-- Hero content -->
        <div class="content content-wrapper flex-layout align-center">

            <!-- Icon list -->
            <div class="icon-list w-50 d-flex align-center justify-start flex-column">
                <!-- 1 -->
                <div class="icon-content d-flex justify-start align-center icon-green">
                    <i class="fas fa-hand-holding-usd"></i>
                    <p>Turn your stuff into cash donations</p>
                </div>
                <!-- 2 -->
                <div class="icon-content d-flex justify-start align-center icon-blue">
                    <i class="fas fa-mobile-alt"></i>
                    <p>Shop allgood.markets - and support a charity</p>
                </div>
                <!-- 3 -->
                <div class="icon-content d-flex justify-start align-center icon-red">
                    <i class="far fa-heart"></i>
                    <p>A new way to fundraise</p>
                </div>
            </div>

            <!-- Img -->
            <div class="hero-img w-50">
                <img :src="mobileView ? imgMobile : img" alt="hero-image">
            </div>
            
        </div>


        <!-- Curved line -->
        <div class="curved-bg"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.23,16.07 C238.94,151.28 238.37,149.30 503.61,20.02 L500.00,150.00 L0.00,150.00 Z"></path></svg></div>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import img from '@/assets/media/image-main.png'
import imgMobile from '@/assets/media/image-mobile.png'

export default {
    name: "Hero",
    components: {
        Navigation
    },

    props: {
        mobileView: Boolean
    },

    data() {
        return {
            img, imgMobile
        }
    }
}

</script>

<style scoped lang="scss">
    .hero {
        position: relative;
        min-height: 85vh;
        width: 100%;
        background: $primary-bg-color;
        
        .curved-bg {
            position: absolute;
            overflow: hidden;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40px;
            fill: $light-gray;

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
                    width: 300px;
                    height: 60px;
                    padding-right: 60px;
                    color: $light;
                    background: $dark-blue;

                    p {
                        width: 220px;
                    }

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
                        margin-right: 10px;
                    }

                    &.icon-green {
                        border: 2px solid $green;
                        i {
                            background: $green;
                        }
                    }
                    &.icon-blue {
                        border: 2px solid $blue;
                        i {
                            background: $blue;
                        }
                    }
                    &.icon-red {
                        i {
                            background: $red;
                        }                       
                        border: 2px solid $red;
                    }
                }
            }
        }
    }

    /****************
       Responsive
    *****************/
    @media(max-width: 768px) {
        .hero {
            .curved-bg {
                display: none;
            }

            .content {
                padding-bottom: 50px;
                .icon-list {
                    order: 2;
                    width: 100%;

                    .icon-content {
                        width: 100%;
                        padding: 0;

                        p {
                            width: calc(100% - 62px);
                        }
                    }
                }

                .hero-img {
                    order: 1;
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>