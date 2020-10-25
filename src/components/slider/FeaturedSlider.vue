<template>
    <div class="featured-slider">
        <h3>Featured items</h3>
        <div class="wrapper">
            <carousel :perPage="4.5" :navigationEnabled="true" :paginationEnabled="false" :navigationNextLabel='""' :navigationPrevLabel='""'>
                <slide class="slide" v-for="slide in slides" :key="slide.id">
                    <SliderItems :img="slide.img" :name="slide.name" :autohor="slide.autohor" :description="slide.description" :price="slide.price" />
                </slide>

            </carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import SliderItems from '@/components/slider/SliderItems.vue'

import img1 from '@/assets/media/img1.jpg';
import img2 from '@/assets/media/img2.jpg';

export default {
    name: 'FeaturedSlider',

    components: {
        Carousel,
        Slide,
        SliderItems
    },

    data() {
        return {
            img1,
            img2,

            slides: [
                { 
                    id: 1,
                    img: img1,
                    name: 'Almost new sofa',
                    autohor: 'John S.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 300
                },

                { 
                    id: 2,
                    img: img2,
                    name: 'Beige sofa',
                    autohor: 'Harinder B.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 400
                },

                { 
                    id: 3,
                    img: img1,
                    name: 'Almost new sofa',
                    autohor: 'John S.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 300
                },

                { 
                    id: 4,
                    img: img2,
                    name: 'Beige sofa',
                    autohor: 'Harinder B.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 400
                },

                { 
                    id: 5,
                    img: img1,
                    name: 'Almost new sofa',
                    autohor: 'John S.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 300
                },

                { 
                    id: 6,
                    img: img2,
                    name: 'Beige sofa',
                    autohor: 'Harinder B.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 400
                },

                { 
                    id: 7,
                    img: img1,
                    name: 'Almost new sofa',
                    autohor: 'John S.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 300
                },

                { 
                    id: 8,
                    img: img2,
                    name: 'Beige sofa',
                    autohor: 'Harinder B.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 400
                },

                { 
                    id: 9,
                    img: img1,
                    name: 'Almost new sofa',
                    autohor: 'John S.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 300
                },
                { 
                    id: 10,
                    img: img2,
                    name: 'Beige sofa',
                    autohor: 'Harinder B.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 400
                },

                { 
                    id: 11,
                    img: img1,
                    name: 'Almost new sofa',
                    autohor: 'John S.',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                    price: 300
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .featured-slider {
        position: relative;
        min-height: 30vh;
        padding: 50px 0;

        h3 {
            text-align: center;
            color: $dark-blue;
            font-weight: bold;
        }

        .slide {
            position: relative;
            box-sizing: border-box;
            height: 400px;
            border: 10px solid #fff;
            border-radius: 30px;
            background: $light-gray;
            overflow: hidden;
            cursor: grab;
        }
    }
</style>