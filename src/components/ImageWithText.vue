<template>
    <div class="image-with-text">

        <div class="wrapper flex-layout align-center h-100">
            <div class="image w-50">
                <img :src="img" alt="image">
            </div>

            <div class="content w-50">
                <h3>Post an item for sale</h3>
                <p>TO post an item for sale - please register<br>or sign in ig you are already registered with allgodd</p>
                <a href="javascript:void(0)" class="button red">Sing Up</a>
                <a href="javascript:void(0)" class="button transparent">Sing In</a>
            </div>
        </div>

    </div>
</template>

<script>
import img from '@/assets/media/Image-post.png'
export default {
    name: "ImageWithText",

    data() {
        return {
            img
        }
    }
}
</script>

<style scoped lang="scss">
    .image-with-text {
        height: 60vh;
        width: 100%;
        background: $primary-bg-color;

        .image {
            img {
                width: 60%;
                height: auto;
            }
        }

        .content {
            box-sizing: border-box;
            padding-right: 10%;
            p {
                font-size: 14px;
                color: $light;
                margin-bottom: 1.5rem;
            }
        }
    }

    /****************
       Responsive
    *****************/
    @media(max-width: 768px) {
        .image-with-text {
            flex-wrap: wrap;
            height: auto;
            padding: 50px 0;

            .image {
                width: 100%;
                order: 2;

                img {
                    width: 100%;
                }
            }

            .content {
                order: 1;
                width: 100%;
                margin-bottom: 50px;
                padding: 0;
            }
        }
    }
</style>