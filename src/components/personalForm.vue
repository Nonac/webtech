<template>
    <div>
      <cv />
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
