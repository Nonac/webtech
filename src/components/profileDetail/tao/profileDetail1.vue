<template>
    <div class="detail-backdrop">
        <div class="detail">
            <section id="about" class="about-area pt-125 pb-130">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title text-center">
                                <h2 class="title">{{about}}</h2>
                                <p>A <del>professional artist</del> newbie full-stack developer</p>
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
                             <radar1/>
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
    import radar1 from "@/components/profileDetail/tao/radar1";
    export default {
        name: "profileDetail",
        data:()=>{
            return{
              about:'About Me',
              introductoryRemark:'Hi，you can call my colleague Nonac.',
              introduceMyself:'Nona-chan was in good spirits when others were struggling. He\'s cynical when others ' +
                  'are sitting on their laurels.',
              birth:'undefined',
              location:'Earth'
            }
        },
        methods: {
            closeSelf() {
                this.$emit("closeme");
            }
        },
        components:{
            radar1
        }
    }
</script>

<style scoped src="@/view/index/assets/profileDetail.css">

</style>
