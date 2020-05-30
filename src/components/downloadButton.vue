<template>
    <div class="sidenav">
        <p class="down-loadtext"
           style="BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;">
            Download as PDF</p>
        <!--    <button class="side-btn btn btn-secondary btn-block" @click="generatePdf" download>Download as Pdf</button>-->
        <div class="download-button downloading" @click="generatePdf">
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
                        points="6,20 20,34 34,20"
                        stroke="#ffffff"
                        fill="none"
                        stroke-width="2"
                        class="arrow-top"
                ></polyline>
                <polyline
                        points="8,20 18,30 30,12"
                        stroke="#ffffff"
                        fill="none"
                        stroke-width="2"
                        class="checkmark"
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
            <div class="progress-bar"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "downloadButton",
        data:()=>{
            return{

            }
        }
    }
</script>

<style scoped src='../view/index/assets/cvMaker.css'>
</style>
