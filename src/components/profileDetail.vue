<template>
    <div class="detail-backdrop">
        <div class="detail" :style="mainStyles">
            <section id="about" class="about-area pt-125 pb-130">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title text-center">
                                <h2 class="title">About Me</h2>
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                            </div> <!-- section title -->
                        </div>
                    </div> <!-- row -->
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-content mt-50">
                                <h5 class="about-title">Hi There! I'm Mark Parker</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul class="clearfix">
                                    <li>
                                        <div class="single-info d-flex align-items-center">
                                            <div class="info-icon">
                                                <i class="lni-calendar"></i>
                                            </div>
                                            <div class="info-text">
                                                <p><span>Date of birth:</span> 8 June 1995</p>
                                            </div>
                                        </div> <!-- single info -->
                                    </li>
                                    <li>
                                        <div class="single-info d-flex align-items-center">
                                            <div class="info-icon">
                                                <i class="lni-envelope"></i>
                                            </div>
                                            <div class="info-text">
                                                <p><span>Email:</span> parker@mysite.com</p>
                                            </div>
                                        </div> <!-- single info -->
                                    </li>
                                    <li>
                                        <div class="single-info d-flex align-items-center">
                                            <div class="info-icon">
                                                <i class="lni-phone-handset"></i>
                                            </div>
                                            <div class="info-text">
                                                <p><span>Phone:</span> +1-202-555-0138</p>
                                            </div>
                                        </div> <!-- single info -->
                                    </li>
                                    <li>
                                        <div class="single-info d-flex align-items-center">
                                            <div class="info-icon">
                                                <i class="lni-map-marker"></i>
                                            </div>
                                            <div class="info-text">
                                                <p><span>Location:</span> 4373, El Centro, CA</p>
                                            </div>
                                        </div> <!-- single info -->
                                    </li>
                                </ul>
                            </div> <!-- about content -->
                        </div>
                        <div class="col-xl-5 offset-xl-1 col-lg-6">
                            <div class="about-skills pt-25">
<!--                                <div class="skill-item mt-25">-->
<!--                                    <div class="skill-header">-->
<!--                                        <h6 class="skill-title">HTML</h6>-->
<!--                                        <div class="skill-percentage">-->
<!--                                            <div class="count-box counted">-->
<!--                                                <span class="counter">80</span>-->
<!--                                            </div>-->
<!--                                            %-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="skill-bar">-->
<!--                                        <div class="bar-inner">-->
<!--                                            <div class="bar progress-line" data-width="80"></div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div> &lt;!&ndash; skill item &ndash;&gt;-->
<!--                                <div class="skill-item mt-25">-->
<!--                                    <div class="skill-header">-->
<!--                                        <h6 class="skill-title">CSS</h6>-->
<!--                                        <div class="skill-percentage">-->
<!--                                            <div class="count-box counted">-->
<!--                                                <span class="counter">60</span>-->
<!--                                            </div>-->
<!--                                            %-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="skill-bar">-->
<!--                                        <div class="bar-inner">-->
<!--                                            <div class="bar progress-line" data-width="60"></div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div> &lt;!&ndash; skill item &ndash;&gt;-->
<!--                                <div class="skill-item mt-25">-->
<!--                                    <div class="skill-header">-->
<!--                                        <h6 class="skill-title">Photoshop</h6>-->
<!--                                        <div class="skill-percentage">-->
<!--                                            <div class="count-box counted">-->
<!--                                                <span class="counter">50</span>-->
<!--                                            </div>-->
<!--                                            %-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="skill-bar">-->
<!--                                        <div class="bar-inner">-->
<!--                                            <div class="bar progress-line" data-width="50"></div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div> &lt;!&ndash; skill item &ndash;&gt;-->
<!--                                <div class="skill-item mt-25">-->
<!--                                    <div class="skill-header">-->
<!--                                        <h6 class="skill-title">Sketch</h6>-->
<!--                                        <div class="skill-percentage">-->
<!--                                            <div class="count-box counted">-->
<!--                                                <span class="counter">90</span>-->
<!--                                            </div>-->
<!--                                            %-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="skill-bar">-->
<!--                                        <div class="bar-inner">-->
<!--                                            <div class="bar progress-line" data-width="90"></div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div> &lt;!&ndash; skill item &ndash;&gt;-->

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
    export default {
        name: "profileDetail",
        methods: {
            closeSelf() {
                this.$emit("closeme");
            }
        }
    }
</script>

<style scoped src="../view/index/assets/profileDetail.css">

</style>

