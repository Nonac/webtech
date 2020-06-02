<template>
    <div>
        <div class="download-button" @click='downloadButtonClick' ref="button" style="z-index: 9999;width: 164px"
        data-toggle="tooltip" data-placement="right" title="Download as PDF">
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
            <div class="progress-bar" :style="{width: progressBarWidth+'%'}" ref="progressBar"></div>
        </div>
    </div>
</template>

<script>

    import {bus} from '@/view/index/main';

    export default {
        name: "downloadButton",
        data:()=>{
            return{
                width:0,
                start:null,
                progress:null,
            }
        },
        props:{
            inputTime: Number
        },
        timers: {
            grow: { time:100 , repeat: true}
        },
        computed:{
            progressBarWidth:function () {
                return this.width;
            }
        },
        methods:{
            downloadButtonClick() {
                bus.$emit('downloadAsPdfClick', null);
                this.start=null;
                this.progress=null;
                this.anination();
                this.$timer.start('grow');
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
                if((this.progress < this.inputTime)||(!this.progress)){
                    var timestamp=new Date().getTime();
                    if(!this.start) {
                        this.start=timestamp;
                        this.width=0;
                    }
                    this.progress=(timestamp-this.start);
                    this.width= (this.progress / this.inputTime) *100;
                }else {
                    this.$timer.stop('grow');
                }
            }
            }
        }
</script>

<style scoped src='@/view/index/assets/cvMaker.css'>
</style>
