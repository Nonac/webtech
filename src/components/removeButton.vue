<template>
    <div>
        <div class="download-button" ref="button" style="z-index: 9999"
             data-toggle="tooltip" data-placement="right" title="Remove Last Page">
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
                        points="6,20 34,20"
                        stroke="#ffffff"
                        fill="none"
                        stroke-width="2"
                        class="arrow-top"
                ></polyline>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "removeButton"
    }
</script>

<style scoped src='../view/index/assets/cvMaker.css'>
</style>
