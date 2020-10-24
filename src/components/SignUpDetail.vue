<template>
    <div class="sign-up-detail d-flex align-center justify-end">
        <div class="content">
            <h3>Are you a Charity or Organization looking to Fundraise?</h3>
            <p>Want to register with AllGood.market so people can donate the proceeds of their sales to you?</p>
            <p>Please contact us at info@allgood.market or complete out online form.</p>
            <a href="javascript:void(0)" class="button red">Sing up charity/campaign</a>

            <div class="circle"></div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SignUpDetail'
}
</script>

<style scoped lang="scss">
    .sign-up-detail {
        margin: 70px 0;
        .content {
            position: relative;
            box-sizing: border-box;
            width: 80%;
            padding: 50px 15%;
            background: $gray;

            h3 {
                font-weight: bold;
                color: $dark-blue;
            }

            p {
                color: $dark-gary;
                margin-bottom: 1.25rem;
            }

            .circle {
                position: absolute;
                top: 100%;
                left: 0;
                transform: translate(-40%, -60%);
                width: 180px;
                height: 180px;
                border: 3px solid $light-green;
                border-radius: 50%;
                animation-name: changeColor;
                animation-duration: 4s;
                animation-iteration-count: infinite;
                animation-direction: alternate-reverse;

                &:after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80px;
                    height: 80px;
                    border: 3px solid $light-green;
                    border-radius: 50%;     
                    animation-name: changeColor;
                    animation-duration: 4s;
                    animation-iteration-count: infinite;
                    animation-direction: alternate-reverse;
                }

                @keyframes changeColor {
                    0% {border-color: $blue;}
                    50% {border-color: $green;}
                    100% {border-color: $red;}
                }
            }
        }
    }
</style>