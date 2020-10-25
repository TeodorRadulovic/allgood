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
                color: $light;
                margin-bottom: 1.5rem;
            }
        }


    }
</style>