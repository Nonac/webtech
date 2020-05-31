<template>
    <div class="sidenav">
        <p class="down-loadtext"
           style="BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;">
            Download as PDF</p>
        <div class="download-button" @click='downloadButtonClick' ref="button">
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
            <div class="progress-bar" :style="{width: progressBarWidth}" ref="progressBar"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "downloadButton",
        data:()=>{
            return{
                width:0,
                start:null,
                remaining:null
            }
        },
        props:{
            inputTime: Number
        },
        computed:{
            progressBarWidth:function () {
                return this.width;
            }
        },
        methods:{
            downloadButtonClick() {
            // this.$emit('buttonClicked','true');
                this.anination();
                // this.grow();

            },
            anination(){
                if(this.$refs.button.classList.contains("downloaded")){
                    this.$refs.button.classList.remove("downloaded");
                }
                this.$refs.button.classList.add("downloading");
                setTimeout(()=>{
                    this.$refs.button.classList.replace("downloading","downloaded");
                },this.inputTime);
            },
            grow(){
                let progress=null;
                do{
                    var timestamp=new Date().getTime();
                    if(!this.start) {
                        this.start=timestamp;
                    }
                    progress=(timestamp-this.start);
                    this.width= (progress / this.inputTime) *100;
                    console.log(this.width);
                }while (progress < this.inputTime);
            }
            }
        }
</script>

<style scoped src='../view/index/assets/cvMaker.css'>
</style>
