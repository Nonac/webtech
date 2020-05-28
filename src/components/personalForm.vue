<template>
    <div><br><br><br><br><br>
        <div class="background background-blur"></div>
        <div class="form">
        <div class="resume">

            <div class="left">
                <!-- <Brief :data="defaultData.Brief"/> -->
                <Brief />
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import Brief from '@/components/brief'
// import defaultData from '@/config/data.js'
    export default {
        name: "personalForm",
        components: {
            Brief
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
