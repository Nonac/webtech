<template>
    <div><br><br><br><br><br>
        <ProfileDetail1 v-show="showDetail1" v-on:closeme="closeme1" style="z-index: 9999"></ProfileDetail1>
        <ProfileDetail2 v-show="showDetail2" v-on:closeme="closeme2" style="z-index: 9999"></ProfileDetail2>
        <div class="background background-blur"></div>
        <div class="split left">
            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="../view/index/img/profile2.jpg" alt="Avatar" style="width:300px;height:300px;">
                </div>
                <div class="flip-card-back">
                    <h1>Tao Xu</h1>
                    <p>si19010@bristol.ac.uk</p>
                    <p>University of Bristol</p>
                    <p>Back-end Engineering</p>
                    <p>
                        <a class="button" href="mailto:si19010@bristol.ac.uk
                        ?subject=This%20is%20just%20an%20email%20to%20say%20hi%20:)">
                            Contact Me
                        </a>
                        <a class="button" @click="toggleDetail1">
                            Detail
                        </a>
                    </p>
                </div>
            </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="../view/index/img/profile1.jpg" alt="Avatar" style="width:300px;height:300px;">
                    </div>
                    <div class="flip-card-back">
                        <h1>Yinan Yang</h1>
                        <p>ff19085@bristol.ac.uk</p>
                        <p>University of Bristol</p>
                        <p>Front-end Engineering</p>
                        <p>
                            <a class="button" href="mailto:ff19085@bristol.ac.uk
                        ?subject=This%20is%20just%20an%20email%20to%20say%20hi%20:)">
                                Contact Me
                            </a>
                            <a class="button" @click="toggleDetail2">
                                Detail
                            </a>
                        </p>
                    </div>
                </div>
        </div>

        <div class="split right">
            <self-evaluation/>

        </div>
    </div>

    </div>
</template>

<script>

    import ProfileDetail1 from "@/components/profileDetail/tao/profileDetail1";
    import ProfileDetail2 from "@/components/profileDetail/yinan/profileDetail2";
    import selfEvaluation from "@/components/selfEvaluation";
    export default {
        name: "about",
        components: {ProfileDetail2,ProfileDetail1,selfEvaluation},
        data(){
            return{
                showDetail1:false,
                showDetail2:false
            }
        },
        methods:{
            toggleDetail1:function(){
                this.showDetail1 = !this.showDetail1;
            },
            closeme1:function(){
                this.showDetail1 = !this.showDetail1;
            },
            toggleDetail2:function(){
                this.showDetail2 = !this.showDetail2;
            },
            closeme2:function(){
                this.showDetail2 = !this.showDetail2;
            }
        }
    }
</script>

<style scoped src="../view/index/assets/about.css">

</style>
