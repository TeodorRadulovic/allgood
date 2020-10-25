<template>
    <div class="about-us">
        <h3>How it Works</h3>
        <p class="red">Learn more about AllGood</p>
        <div class="separator"></div>

        <div class="content content-wrapper flex-layout align-center">
            <!-- 1 -->
            <div class="icon-box d-flex flex-column">
                <!-- <i class="fal fa-file-plus"></i> -->
                <img :src="img1" alt="icon">
                <img class="arrow" :src="arrow" alt="icon">
                <h6>Post an Item</h6>
                <p>Rerister to post an item for sale. <a class="red" href="javascript:void(0)">Register now!</a></p>
            </div>
            <!-- 2 -->
            <div class="icon-box flex-column">
                <img :src="img2" alt="icon">
                <h6>Select and Ogranization</h6>
                <p>Rerister to post an item for sale. <a class="red" href="javascript:void(0)">Register now!</a></p>
            </div>
            <!-- 3 -->
            <div class="icon-box flex-column">
                <img :src="img3" alt="icon">
                <h6>Buyer Makes the Payment</h6>
                <p>Rerister to post an item for sale. <a class="red" href="javascript:void(0)">Register now!</a></p>
            </div>
            <!-- 4 -->
            <div class="icon-box flex-column">
                <img :src="img4" alt="icon">
                <h6>Post an Item</h6>
                <p>You sell your item and arrange for pickup.</p>
            </div>

            <div class="video w-100">
                <img :src="video" alt="">
            </div>
        </div>


    </div>
</template>

<script>
import img1 from '@/assets/media/icon-blue.png'
import img2 from '@/assets/media/icon-gold.png'
import img3 from '@/assets/media/icon-green.png'
import img4 from '@/assets/media/icon-lightblue.png'
import heart from '@/assets/media/dashed-heart.png'
import arrow from '@/assets/media/arrow.png'
import video from '@/assets/media/watch-the-video.png'

export default {
    name: 'AboutUS',
    data() {
        return {
            img1, img2, img3, img4, heart, arrow, video
        }
    }
}
</script>

<style scoped lang="scss">
    .about-us {
        margin-top: 50px;
        color: $dark-blue;
        min-height: 70vh;
        text-align: center;

        h3 {
            color: $dark-blue;
            font-weight: bold;
            margin-bottom: 1.25rem;
        }

        .content {
            position: relative;
            margin: 50px auto 50px auto;
            .icon-box {
                position: relative;
                width: 220px;

                img {
                    width: 100%;

                    &.arrow {
                        position: absolute;
                        top: 0%;
                        left: 0;
                        transform: translate(-70%, -200%) rotate(45deg);
                        width: 150px;
                    }
                }

                h6 {
                    margin: 1.25rem 0;
                    color: $dark-blue;
                }

                p {
                    color: $dark-gray;
                }
            }

            .video {
                margin-top: 100px;
                img {
                    width: 400px;
                    height: auto;
                }
            }
        }



    }
</style>