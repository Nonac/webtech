<template>
    <div><br><br><br><br><br>
        <div class="background background-blur"></div>
        <div class="form">
        <div class="resume">

            <div class="left">
                <!-- <Brief :data="defaultData.Brief"/> -->
                <cv />
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import cv from '@/components/brief'
// import defaultData from '@/config/data.js'
    export default {
        name: "personalForm",
        components: {
            cv
        },
        computed: {
            // defaultData () {
            //   return '';
            //     // return defaultData
            // }
        }
    }
</script>

<style scoped src="../view/index/assets/personalForm.css">

</style>
