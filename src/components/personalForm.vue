<template>
    <div class="resume">
        <div class="left">
            <Brief :data="defaultData.Brief"/>
        </div>
    </div>
</template>


<script>
import Brief from '@/components/brief'
import defaultData from '@/config/data.js'
    export default {
        name: "personalForm",
        components: {
            Brief
        },
        computed: {
            defaultData () {
                return defaultData
            }
        }
    }
</script>

<style scoped>

</style>
