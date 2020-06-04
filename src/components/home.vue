<template>
    <div><br><br><br><br><br>
        <div class="background background-blur" style="z-index: -999"></div>
            <div class="content-front" style="z-index: -998">
                <lottie :options="defaultOptions" :height="1080" :width="1920" v-on:animCreated="handleAnimation" style="z-index: -997"/>
                <a @click="startClick">
                    <hgroup class="svg-border-animation" style="z-index: 10">
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
            defaultOptions: { animationData: animationData },
            animationSpeed: 1,
            anim: {}
        }
    },
    methods:{
        startClick(){
            var c_start=document.cookie.indexOf("jwt");
            if(c_start === -1){
                this.$router.replace('/login');
            }
            else{
                this.$router.replace('/userProfile');
            }
        },
        handleAnimation: function(anim) {
            this.anim = anim;
            console.log(anim); //这里可以看到 lottie 对象的全部属性
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../view/index/assets/home.css">
</style>
