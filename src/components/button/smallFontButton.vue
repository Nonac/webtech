<template>
    <div class="download-button" ref="button" style="z-index: 9999;width: 80px"
         data-toggle="tooltip" data-placement="right" title="Decrease Font Size">
        <svg class="arrow" width="40" height="40" viewBox="0 0 40 40">
            <title>smallFont2</title>
            <path ref="word" d="M25.09,38.54l-3.86-10H9.63l-3.85,10H1.89L13.51,9.22h3.85L29,38.54ZM10.84,25.43H20L15.42,13.5Z" transform="translate(-1.89 -2)" style="fill:#fff"/>
            <path ref="triangle" id="triangle" d="M31,7.82l4.8-5.54A.17.17,0,0,0,35.63,2H26a.17.17,0,0,0-.13.28l4.8,5.54A.18.18,0,0,0,31,7.82Z" transform="translate(-1.89 -2)" style="fill:#fff"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "smallFontButton",
        methods:{
            active(){
                this.$refs.word.style.fill='#A5DC86';
                this.$refs.triangle.style.fill='#A5DC86';
                this.$refs.button.style['background-image']='linear-gradient(160deg, #0F1113,#0F1113)';
            },
            recovery(){
                this.$refs.word.style.fill='white';
                this.$refs.triangle.style.fill='white';
                this.$refs.button.style['background-image']='linear-gradient(160deg, #343A40,#343A40)';
            }
        }
    }
</script>

<style scoped src='@/view/index/assets/cvMaker.css'>
</style>
