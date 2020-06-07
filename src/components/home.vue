<template>
    <div><br><br><br><br><br>
        <div class="background background-blur bottom999"></div>
            <div class="content-front bottom998">
                <lottie class="bottom997 lottieWindow" :options="defaultOptions" :height="1080" :width="this.width" v-on:animCreated="handleAnimation"/>
                <a @click="startClick">
                    <hgroup class="svg-border-animation top10">
                        <svg viewBox="0 0 320 60">
                            <rect class="shape" height="60" width="320"></rect>
                        </svg>
                        <div class="hover-text" >Start</div>
                    </hgroup>
                </a>
            </div>
    </div>
</template>

<script>
    import * as animationData from "../view/index/assets/animation/homeAnimationData.json";
export default {
    name: 'Home',
    data(){
        return {
            defaultOptions: {
                animationData: animationData.default,

            },
            animationSpeed: 1,
            anim: {
            }
        }
    },
    methods:{
        startClick(){
            var c_start=document.cookie.indexOf("jwt");
            if(c_start === -1){
                this.$router.replace('/register');
            }
            else{
                this.$router.replace('/userProfile');
            }
        },
        handleAnimation:function (anim) {
            this.anim=anim;
            this.anim.setSubframe(false);

        }

    },
    computed:{
      width: () => window.width,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../view/index/assets/home.css">
</style>
