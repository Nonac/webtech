<template>
    <div class="detail-backdrop">
        <div class="detail" :style="mainStyles">
            <section id="about" class="about-area pt-125 pb-130">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title text-center">
                                <h2 class="title">{{about}}</h2>
                                <p>{{subTitle}}</p>
                            </div> <!-- section title -->
                        </div>
                    </div> <!-- row -->
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-content mt-50">
                                <h5 class="about-title">
                                    {{introductoryRemark}}
                                </h5>
                                <p>
                                    {{introduceMyself}}
                                </p>
                                <ul class="clearfix">
                                    <li>
                                        <div class="single-info d-flex align-items-center">
                                            <div class="info-icon">
                                                <i class="lni-calendar"></i>
                                            </div>
                                            <div class="info-text">
                                                <p><span>Date of birth:</span> {{birth}}</p>
                                            </div>
                                        </div> <!-- single info -->
                                    </li>
                                    <li>
                                        <div class="single-info d-flex align-items-center">
                                            <div class="info-icon">
                                                <i class="lni-map-marker"></i>
                                            </div>
                                            <div class="info-text">
                                                <p><span>Location:</span>{{location}}</p>
                                            </div>
                                        </div> <!-- single info -->
                                    </li>
                                </ul>
                            </div> <!-- about content -->
                        </div>
                        <div class="col-xl-5 offset-xl-1 col-lg-6">
                            <div class="about-skills pt-25">
                             <radar2/>
                            </div> <!-- about skills -->
                        </div>
                    </div> <!-- row -->
                </div> <!-- container -->
            </section>
            <div class="detail-footer">
                <button type="button" class="btn-confirm" @click="closeSelf">Close</button>
            </div>
        </div>

    </div>
</template>

<script>
    import radar2 from "@/components/profileDetail/yinan/radar2";
    export default {
        name: "profileDetail",
        data:()=>{
            return{
                about:'About Me',
                subTitle:'A front-end designer with unrealistic fantasies.',
                introductoryRemark:'Hi，you can call me Nonac.',
                introduceMyself:'He was in good spirits when others were struggling. He\'s cynical when others ' +
                    'are sitting on their laurels.',
                birth:'26 Nov 1991',
                location:'Tianjin, China'
            }
        },
        methods: {
            closeSelf() {
                this.$emit("closeme");
            }
        },
        components:{
            radar2
        }
    }
</script>

<style scoped src="@/view/index/assets/profileDetail.css">

</style>

