<template>
    <div class="content d-flex flex-column justify-between">
        <!-- image -->
        <div class="image">
            <img :src="img" alt="sofa">
        </div>

        <!-- text -->
        <div class="text-content">
            <h6>{{ name }}</h6>
            <p class="author">{{ autohor }}</p>
            <p class="desription">{{ description }}</p>
            <p class="price"><i class="fas fa-dollar-sign"></i>{{ price }}</p>

        </div>

        <!-- action -->
        <div class="cta d-flex justify-center align-center">
            <a href="javascript:void(0)" class="d-flex justify-center align-center w-100">
                <i class="fas fa-hand-holding-heart"></i>
                <p>Sick Kids</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SliderItems",
    props: {
        img: String,
        name: String,
        autohor: String,
        description: String,
        price: Number
    },

}
</script>

<style scoped lang="scss">
    .content {
        color: $dark-blue;
        height: 100%;
        .image {
            height: 40%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .text-content {
            height: 50%;
            padding: 0 20px;

            h6 {
                margin: 1.25rem 0;
            }

            p {
                margin-bottom: 1.25rem;

                &.author {
                    font-weight: bold;
                }

                &.price {
                    font-weight: bold;
                    font-size: 22px;
                }

                &.desription {
                    font-size: 12px;
                }
                
            }
        }

        .cta {
            width: 100%;
            height: 10%;
            background: $gray;
            cursor: pointer;

            a {
                color: $dark-blue;
            }

            i {
                margin-right: 5px;
            }
        }
    }
</style>