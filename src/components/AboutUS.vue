<template>
    <div class="about-us">
        <h3>How it Works</h3>
        <p class="red">Learn more about AllGood</p>
        <div class="separator"></div>

        <div class="content content-wrapper flex-layout align-center">
            <div class="icons w-100 flex-layout align-center">
                <!-- 1 -->
                <div class="icon-box d-flex flex-column">
                    <!-- <i class="fal fa-file-plus"></i> -->
                    <div class="img">
                        <img :src="img1" alt="icon">
                        <img class="dash" :src="dash1" alt="icon">
                    </div>
                    <img class="arrow" :src="arrow" alt="icon">
                    <h6>Post an Item</h6>
                    <p>Rerister to post an item for sale. <a class="red" href="javascript:void(0)">Register now!</a></p>
                </div>
                <!-- 2 -->
                <div class="icon-box flex-column">
                    <div class="img">
                        <img :src="img2" alt="icon">
                        <img class="dash" :src="dash2" alt="icon">
                    </div>
                    <h6>Select and Ogranization</h6>
                    <p>Rerister to post an item for sale. <a class="red" href="javascript:void(0)">Register now!</a></p>
                </div>
                <!-- 3 -->
                <div class="icon-box flex-column">
                    <div class="img">
                        <img :src="img3" alt="icon">
                        <img class="dash" :src="dash3" alt="icon">
                    </div>
                    <h6>Buyer Makes the Payment</h6>
                    <p>Rerister to post an item for sale. <a class="red" href="javascript:void(0)">Register now!</a></p>
                </div>
                <!-- 4 -->
                <div class="icon-box flex-column">
                    <img :src="img4" alt="icon">
                    <h6>Post an Item</h6>
                    <p>You sell your item and arrange for pickup.</p>

                    <!-- Heart -->
                    <img class="heart" :src="heart" alt="" width="600px">
                </div>
            </div>

            <div class="video d-flex w-100">
                <h4>Watch the video</h4>
                <img :src="video" alt="">
            </div>

            <div class="text">
                <h6>Donate</h6>
                <p>AllGood send the proceeds dorectly to the charity-campaign you choose to support</p>
            </div>
        </div>

    </div>
</template>

<script>
import img1 from '@/assets/media/icon-blue.png'
import img2 from '@/assets/media/icon-gold.png'
import img3 from '@/assets/media/icon-green.png'
import img4 from '@/assets/media/icon-lightblue.png'
import dash1 from '@/assets/media/dashed-line-gold.png'
import dash2 from '@/assets/media/dashed-line-green.png'
import dash3 from '@/assets/media/dashed-line-blue.png'
import heart from '@/assets/media/dashed-heart.png'
import arrow from '@/assets/media/arrow.png'
import video from '@/assets/media/watch-the-video.png'

export default {
    name: 'AboutUS',
    data() {
        return {
            img1, img2, img3, img4, heart, arrow, video, dash1, dash2, dash3
        }
    }
}
</script>

<style scoped lang="scss">
    .about-us {
        background: $light-gray;
        position: relative;
        padding-top: 50px;
        padding-bottom: 100px;
        color: $dark-blue;
        text-align: center;

        h3 {
            color: $dark-blue;
            font-weight: bold;
            margin-bottom: 1.25rem;
        }

        p {
            color: $dark-gray;
        }

        .content {
            max-width: 1215px;
            justify-content: center;
            position: relative;
            margin: 50px auto 50px auto;
            .icon-box {
                position: relative;
                width: 220px;

                .img {
                    position: relative;
                    .dash {
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translate(100%, -50%);
                        width: 110px;
                    }
                }

                img {
                    width: 100%;
                    pointer-events: none;

                    &.arrow {
                        position: absolute;
                        top: 0%;
                        left: 0;
                        transform: translate(-70%, -200%) rotate(45deg);
                        width: 150px;
                    }

                    &.heart {
                        position: absolute;
                        top: 28%;
                        right: -60%;
                        width: 850px;
                    }
                }

                h6 {
                    margin: 1.25rem 0;
                    color: $dark-blue;
                }
            }

            .video {
                margin-top: 200px;
                img {
                    width: 400px;
                    height: auto;
                }

                h4 {
                    display: none;
                }
            }
        }

        div.text {
            width: 260px;
            position: absolute;
            top: 80%;
            right: 16%;
            text-align: center;

            h6 {
                margin-bottom: 1.25rem;
            }
        }
    }

    /****************
       Responsive
    *****************/
    @media(max-width: 768px) {
        .about-us {
            padding-bottom: 20px;
            .content {
                .icons {
                    flex-wrap: nowrap;
                    overflow-x: auto;
                }

                .icon-box {
                    flex-shrink: 0;
                    margin-right: 40px;
                    img {
                        &.arrow, &.heart {
                            display: none;
                        }
                    }
                }

                .video {
                    display: flex;
                    flex-direction: column;
                    margin-top: 50px;
                    img {
                        width: 100%;
                        height: auto;
                    }

                    h4 {
                        color: $dark-blue;
                        font-weight: bold;
                        display: block;
                    }
                }
            }

            div.text {
                display: none;
            }
        }
    }
</style>