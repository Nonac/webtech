<template>
    <div class="download-button" ref="button" style="z-index: 9999;width: 80px"
         data-toggle="tooltip" data-placement="right" title="Incline">
        <svg class="arrow" width="40" height="40" viewBox="0 0 40 40">
            <path ref="word" d="M8.56,34,24.28,7.87H19.53l2.59-4.36H38.38l-2.7,4.36H30.93L14.92,34h4.55l-2.71,4.36H1.43L4,34Z" transform="translate(-1.43 -3.51)" style="fill:#fff"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "inclineFontButton",
        methods:{
            active(){
                this.$refs.word.style.fill='#A5DC86';
                this.$refs.button.style['background-image']='linear-gradient(160deg, #0F1113,#0F1113)';
            },
            recovery(){
                this.$refs.word.style.fill='white';
                this.$refs.button.style['background-image']='linear-gradient(160deg, #343A40,#343A40)';
            }
        }
    }
</script>

<style scoped src='@/view/index/assets/cvMaker.css'>
</style>
