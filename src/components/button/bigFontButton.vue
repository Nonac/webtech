<template>
        <div class="button button-size" ref="button" data-toggle="tooltip" data-placement="right" title="Increase Font Size">
            <svg class="arrow" width="40" height="40" viewBox="0 0 40 40" ref="increase">
                    <title>bigFont2</title>
                    <path id="word" class="fillWhite" ref="word" d="M27.8,38.36,23.34,26.82H9.91L5.46,38.36H1L14.4,4.43h4.45L32.3,38.36ZM11.31,23.19H22L16.61,9.39Z" transform="translate(-0.95 -2.13)" />
                    <path id="triangle" class="fillWhite" ref="triangle" d="M30.71,2.18l-4.8,5.54A.17.17,0,0,0,26,8h9.59a.17.17,0,0,0,.13-.28L31,2.18A.18.18,0,0,0,30.71,2.18Z" transform="translate(-0.95 -2.13)" />
            </svg>
        </div>
</template>

<script>
    export default {
        name: "bigFontButton",
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
