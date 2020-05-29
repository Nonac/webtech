<template>
    <div><br><br><br><br><br>
        <div class="background background-blur"></div>
            <div class="content-front">
                <p class="hero-work">The BEST Online Resume Builder</p>
                <h2 class="hero-title">Make Your Own Resume</h2>
                <p class="hero-sub-title">Sign up! Submit information! Generate! Post!</p>
                <a @click="startClick">
                    <hgroup class="svg-border-animation">
                        <svg viewBox="0 0 320 60">
                            <rect class="shape" height="60" width="320"></rect>
                        </svg>
                        <div class="hover-text">Start</div>
                    </hgroup>
                </a>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods:{
        startClick(){
            var c_start=document.cookie.indexOf("jwt");
            if(c_start === -1){
                this.$router.replace('/login')
            }
            else{
                this.$router.replace('/form')
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../view/index/assets/homepage.css">
</style>
