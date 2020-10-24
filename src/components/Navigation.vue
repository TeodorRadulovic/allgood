<template>
    <div class="nav">
        <div class="content wrapper flex-layout">
            <!-- logo -->
            <img class="logo" :src="logo" alt="logo">

            <!-- search item -->
            <div class="search-item">
                <p>Search items</p>
                <p>Post items</p>
            </div>

            <!-- status information -->
            <div class="status-info">
                
            </div>

        </div>
    </div>
</template>

<script>
/* Import logo */
import logo from "@/assets/media/logo-jsguru.png";

export default {
    name: "Navigation",

    data() {
        return {
            logo
        }
    }
}
</script>

<style scoped lang="scss">
    .nav {
        display: flex;
        background: $primary-bg-color;

        img.logo {
            width: 180px;
            height: auto;
        }
    }
</style>
