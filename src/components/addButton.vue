<template>
    <div>
        <div class="download-button" ref="button" style="z-index: 9999"
        data-toggle="tooltip" data-placement="right" title="Add Page">
            <svg class="arrow" width="40" height="40" viewBox="0 0 40 40">
                <circle
                        cx="50%"
                        cy="50%"
                        r="19"
                        fill="none"
                        stroke="#ffffff"
                        stroke-width="2"
                ></circle>
                <polyline
                        points="6,20 34,20"
                        stroke="#ffffff"
                        fill="none"
                        stroke-width="2"
                        class="arrow-top"
                ></polyline>
                <line
                        x1="50%"
                        y1="7"
                        x2="50%"
                        y2="34"
                        stroke="#ffffff"
                        stroke-width="2"
                        class="middle-line"
                ></line>
            </svg>
        </div>
    </div>
</template>

<script>

    export default {
        name: "addButton",
        data:()=>{
            return{
            }
        },
        methods:{
            }
        }
</script>

<style scoped src='../view/index/assets/cvMaker.css'>
</style>
