<template>
    <div class="nav">
        <div class="content wrapper flex-layout align-center">
            <!-- logo -->
            <a class="logo" href="javascript:void(0)"><img :src="mobileView ? logoMobile : logo" alt="logo"></a>

            <!-- search item -->
            <div class="search-items d-flex justify-between text-light">
                <p class="search-item active">Search items</p>
                <a href="javascript:void(0)"><p>Post items</p></a>
            </div>

            <!-- search item form -->
            <div class="search-items-form active">
                <form>
                    <input type="text" class="search" :placeholder="mobileView ? 'Search or post...' : 'Location'">
                    <input type="text" class="search" placeholder="Category">
                    <input type="text" class="search" placeholder="Charity">
                    <button type="submit" class="search-button"><i class="fas fa-search"></i></button>
                </form>
            </div>

            <!-- post item form -->
            <div class="post-items-form">
                <form>
                    <input type="text" class="search" placeholder="Title">
                    <input type="text" class="search" placeholder="Content">
                    <button type="submit" class="search-button"><i class="fas fa-plus"></i></button>
                </form>
            </div>

            <!-- status information -->
            <div class="status-info flex-layout align-center">
                <i class="far fa-envelope"></i>
                <i :data-notifications="this.notifications" class="notifications far fa-bell"></i>

                <div v-on:click="accountDropdown()" class="account-detail flex-layout align-center">
                    <div class="acc-img">
                        <img :src="person" alt="">
                    </div>
                    <p class="username">Username</p>
                    <i class="fas fa-chevron-down"></i>

                    <!-- dropdown -->
                    <div class="account-dropdown d-flex flex-column">
                        <p>Singed in as:<br><span class="bold">Teodor Radulovic</span></p>
                        <hr>
                        <a href="javascript:void(0)">Your profile</a>
                        <a href="javascript:void(0)">Lorem ipsum</a>
                        <a href="javascript:void(0)">Lorem ipsum</a>
                        <a href="javascript:void(0)">Lorem ipsum</a>
                        <hr>
                        <a href="javascript:void(0)">Help</a>
                        <a href="javascript:void(0)">Sing out</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
/* Import logo */
import logo from "@/assets/media/logo-jsguru.png";
import logoMobile from "@/assets/media/logo-mobile.png";
import person from "@/assets/media/teodor.jpg";

export default {
    name: "Navigation",

    props: {
        mobileView: Boolean
    },

    data() {
        return {
            logo, logoMobile, person,
            notifications: 2
        }
    },

    mounted() {
        this.searchActiveClass();
    },

    methods: {
        searchActiveClass() {
            const searchItems = document.querySelectorAll('div.search-items p');
            const serchItem = document.querySelector('div.search-items p.search-item')
            const searchForm = document.querySelector('div.search-items-form');
            const postForm = document.querySelector('div.post-items-form');
            
            searchItems.forEach((item)=> {
                item.addEventListener('click', (e)=> {
                    if(!e.target.classList.contains('active')) {
                        searchItems.forEach(element=> element.classList.toggle('active'))
                    }

                    if(serchItem.classList.contains('active')) {
                        searchForm.classList.add('active')
                        postForm.classList.remove('active')
                    } else {
                        searchForm.classList.remove('active')
                        postForm.classList.add('active')
                    }
                })
            })
        },

        accountDropdown() {
            console.log('test')
            const accDetail = document.querySelector('.account-detail');
            accDetail.classList.toggle('active');
        }
    }
}
</script>



<style scoped lang="scss">
    .nav {
        position: relative;
        display: flex;
        background: $primary-bg-color;
        padding: 5px 0 50px 0;

        a.logo {
            img {
                width: 180px;
                height: auto;
            }
        }

        .search-items {
            p {
                position: relative;
                cursor: pointer;
                margin-right: 25px;
                &.active {
                    &:after {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 100%;
                        padding-top: 5px;
                        width: 100%;
                        border-bottom: 2px solid $light-gray;
                    }
                }
            }

            a {
                color: $light;
            }
        }

        /* search and post item */
        %search-and-post {
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
            transition: .5s;

            form {
                display: flex;
                justify-content: center;
                align-items: center;

                input {
                    height: 40px;
                    box-sizing: border-box;
                    padding: 22px;
                    margin: 0;
                    border: 0;
                    border-right: 1px solid $light-gray;

                    &:nth-child(1) {
                        border-radius: 14px 0 0 14px;
                    }

                    &:nth-last-child(2) {
                        border-radius: 0 14px 14px 0;
                    }

                    &:focus {
                        outline: none;
                    }
                }

                button {
                    cursor: pointer;
                    color: $light;
                    background: $red;
                    font-size: 20px;
                    border: none;
                    border-radius: 14px;
                    box-sizing: border-box;
                    height: 40px;
                    width: 40px;
                    transform: translateX(-50%);
                    padding: 22px;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:focus {
                        outline: none;
                    }
                }
            }

            &.active {
                transition: .5s;
            }



        }
        .search-items-form {
            @extend %search-and-post;
            left: 0;
            transform: translateX(-100%);

            &.active {
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .post-items-form {
            @extend %search-and-post;
            right: 0;
            transform: translateX(100%);

            &.active {
                right: 50%;
                transform: translateX(50%);
            }
        }

        /* Account details */
        .status-info {
            color: $light;
            i {
                font-size: 20px;
                cursor: pointer;
                margin-right: 25px;
                transition: .3s;

                &:hover {
                    transform: scale(1.1);
                    transition: .3s;
                }

                &.notifications {
                    position: relative;
                    &:after {
                        content: attr(data-notifications);
                        position: absolute;
                        top: 0;
                        right: 0;
                        transform: translate(70%, -70%);
                        background: $red;
                        border-radius: 15px;
                        font-size: 10px;
                        width: 12px;
                        height: 12px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }

            .account-detail {
                cursor: pointer;
                position: relative;
                .acc-img {
                    width: 30px;
                    height: 30px;
                    background: red;
                    border-radius: 30px;
                    margin-right: 5px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: auto;
                    }
                }

                p.username {
                    cursor: pointer;
                    margin-right: 5px;
                }

                i {
                    margin: 0;
                    font-size: 12px;
                    transition: .5s;
                }

                .account-dropdown {
                    transform: scaleY(0);
                    flex-direction: column;
                    position: absolute;
                    right: 0;
                    top: 100%;
                    margin-top: 10px;
                    background: $light;
                    color: $dark;
                    padding: 10px;
                    min-width: 150px;
                    border-radius: 10%;
                    transition: .5s;
                    transform-origin: top center;

                    a {
                        color: $dark;
                    }

                    hr {
                        width: 100%;
                    }
                }

                &.active {
                    .account-dropdown {
                        height: auto;
                        display: flex;
                        flex-direction: column;
                        transform-origin: top center;
                        transform: scaleY(1);
                        transition: .5s;
                    }

                    i {
                        transform: rotate(180deg);
                        transition: .5s;
                    }
                }
            }
        }
    }

    /****************
       Responsive
    *****************/

    @media(max-width: 768px) {
        .nav {
            padding: 20px 0;
            a.logo {
                width: 40%;
                img {
                    width: 100%;
                }
            }
            background-color: $light;
            .search-items, .status-info, .post-items-form {
                display: none;
            }

            .search-items-form {
                position: relative;
                width: 55%;
                left: unset;
                transform: translateX(0);
                
                &.active {
                    left: unset;
                    transform: translateX(0);
                }

                form {
                    input {
                        width: 100%;
                        background: $light-gray;
                        padding-right: 5px;
                        &:nth-child(2), &:nth-child(3) {
                            display: none;
                        }

                        &::placeholder {
                            color: $dark-blue;
                        }
                    }
                    button {
                        transform: translateX(-22%);
                    }
                }
            }
        }
    }
</style>
