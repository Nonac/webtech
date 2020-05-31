<template>
    <div><br><br><br><br><br>
        <ProfileDetail v-show="showDetail" v-on:closeme="closeme" style="z-index: 9999"></ProfileDetail>
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
                        <a class="button">
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
                            <a class="button" @click="toggleDetail">
                                Detail
                            </a>
                        </p>
                    </div>
                </div>
        </div>
        <div class="split right">
            <section class="row-section">
                <div class="row">
                    <h2 class="text-center">
                        <span>Self-Evaluation</span>
                    </h2>
                </div>
                <div class="col-md-10 offset-md-1 row-block">
                    <ul id="sortable">
                        <li><div class="media">
                            <div class="media-body">
                                <h4>HTML</h4>
                                <p>
                                    content
                                </p>
                            </div>
                        </div></li>
                        <li><div class="media">
                            <div class="media-body">
                                <h4>CSS</h4>
                                <p>
                                    content
                                </p>
                            </div>
                        </div></li>
                        <li><div class="media">
                            <div class="media-body">
                                <h4>JS</h4>
                                <p>
                                    content
                                </p>
                            </div>
                        </div></li>
                        <li><div class="media">
                            <div class="media-body">
                                <h4>PNG</h4>
                                <p>
                                    content
                                </p>
                            </div>
                        </div></li>
                        <li><div class="media">
                            <div class="media-body">
                                <h4>SVG</h4>
                                <p>
                                    content
                                </p>
                            </div>
                        </div></li>
                        <li><div class="media">
                            <div class="media-body">
                                <h4>Server</h4>
                                <p>
                                    content
                                </p>
                            </div>
                        </div></li>
                        <li><div class="media">
                            <div class="media-body">
                                <h4>Database</h4>
                                <p>
                                    content
                                </p>
                            </div>
                        </div></li>
                        <li><div class="media">
                            <div class="media-body">
                                <h4>Dynamic pages</h4>
                                <p>
                                    content
                                </p>
                            </div>
                        </div></li>
                        <li><div class="media">
                            <div class="media-body">
                                <h4>Dynamic pages</h4>
                                <p>
                                    content
                                </p>
                            </div>
                        </div></li>
                    </ul>
                </div>
            </section>
        </div>
    </div>

    </div>
</template>

<script>
    import ProfileDetail from "@/components/profileDetail";
    export default {
        name: "about",
        components: {ProfileDetail},
        data(){
            return{
                showDetail:false
            }
        },
        methods:{
            toggleDetail:function(){
                this.showDetail = !this.showDetail;
            },
            closeme:function(){
                this.showDetail = !this.showDetail;
            }
        }
    }
</script>

<style scoped src="../view/index/assets/about.css">

</style>
