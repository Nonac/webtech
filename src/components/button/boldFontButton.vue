<template>
    <div class="download-button" ref="button" style="z-index: 9999;width: 80px"
         data-toggle="tooltip" data-placement="right" title="Bold">
        <svg class="arrow" width="40" height="40" viewBox="0 0 40 40">
            <path ref="word" d="M19.09,2.34a29.53,29.53,0,0,1,5.35.46,15.44,15.44,0,0,1,4.41,1.46,8.26,8.26,0,0,1,3,2.59,6.5,6.5,0,0,1,1.1,3.8,9.44,9.44,0,0,1-.38,2.78,7.4,7.4,0,0,1-1.08,2.2,8,8,0,0,1-1.7,1.69,11,11,0,0,1-2.25,1.25v.25a10.27,10.27,0,0,1,2.78,1,9.4,9.4,0,0,1,2.45,1.8,9,9,0,0,1,1.76,2.57,7.64,7.64,0,0,1,.67,3.24A10.28,10.28,0,0,1,34,32.51a9.34,9.34,0,0,1-3.23,3.38,14.72,14.72,0,0,1-4.89,1.88,30.15,30.15,0,0,1-6.13.59H3v-36ZM16.27,16.46a24.77,24.77,0,0,0,3.84-.25,7.75,7.75,0,0,0,2.6-.8A3.55,3.55,0,0,0,24.2,14a4.36,4.36,0,0,0,.48-2.13A4.44,4.44,0,0,0,24.2,9.7a3.68,3.68,0,0,0-1.49-1.43,8.23,8.23,0,0,0-2.6-.8,24.77,24.77,0,0,0-3.84-.25h-5v9.24Zm1.08,17c3.16,0,5.55-.46,7.17-1.4a5,5,0,0,0,2.42-4.66,5,5,0,0,0-2.42-4.66q-2.43-1.39-7.17-1.4H11.22V33.47Z" transform="translate(-2.98 -2.34)" style="fill:#fff"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "boldFont",
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
