<template>
    <div class="footer">
        <div class="content content-wrapper flex-layout">
            <!-- col 1 -->
        <div class="info d-flex flex-column">
            <img :src="logo" alt="logo_dark">
            <p>Online marketplace, where you can sell your stuff in support of the charity of campaign you choose.</p> 
            <div class="social-icons">
                <a href="javascript:void(0)"><i class="fab fa-facebook-square"></i></a>
                <a href="javascript:void(0)"><i class="fab fa-instagram-square"></i></a>
                <a href="javascript:void(0)"><i class="fab fa-twitter-square"></i></a>
            </div> 
        </div>

            <!-- col 2 -->
            <div class="about-us">
                <h6>AllGood</h6>

                <div class="footer-menu d-flex flex-column">
                    <a href="javascript:void(0)">About us</a>
                    <a href="javascript:void(0)">Contact</a>
                    <a href="javascript:void(0)">Help</a>
                </div>
            </div>

            <!-- col 3 -->
            <div class="charities">
                <h6>Charities</h6>

                <div class="footer-menu d-flex flex-column">
                    <a href="javascript:void(0)">Charity/Campaign partners</a>
                    <a href="javascript:void(0)">Sign up Charity/campaign</a>
                </div>
            </div>
        </div>



        <div class="copyright content-wrapper d-flex align-center">
            <p>&copy; AllGood 2020. All Rights Reserved</p>
            <a href="javascript:void(0)">Privacy Policy</a>
            <a href="javascript:void(0)">Terms of Services</a>
        </div>

    </div>
</template>

<script>
import logo from "@/assets/media/Logo-footer.png"

export default {
    name: "Footer",

    data() {
        return {
            logo
        }
    }
}
</script>

<style scoped lang='scss'>
    .footer {
        margin-top: 100px;
        background: $gray;
        padding: 30px 0;
        font-size: 14px;
        color: $dark-blue;

        h6 {
            margin: 0 0 1.25rem 0;
            color: $dark-blue;
        }

        a {
            text-decoration: none;
            color: $dark-blue;
        }

        /* col 1 */
        .info {
            width: 60%;
            box-sizing: border-box;
            padding-right: 30%;

            img {
                width: 100px;
                margin-bottom: 1.25rem;
            }

            .social-icons {
                margin-top: 1.25rem;
                a {
                    font-size: 20px;
                    color: $dark-blue;
                    margin-right: 30px;
                    cursor: pointer;
                    
                    i {
                        transition: .3s;
                    }

                    &:nth-last-child(1) {
                        margin-right: 0;
                    }

                    &:hover {
                        i {
                            transform: scale(1.1);
                            transition: .3s;
                        }
                    }
                }
            }
        }

        /* col 2 and col 3*/
        .footer-menu {
            a {
                margin-bottom: 16px;
            }
        }
        .about-us, .charities {
            width: 20%;
        }

        /* copyright */
        .copyright {
            margin-top: 50px;

            p, a {
                font-size: 12px;
                margin-right: 20px;
            }
        }


    }
</style>