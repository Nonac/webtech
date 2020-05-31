<template>
    <div class="detail-backdrop">
        <div class="detail" :style="mainStyles">
            <div class="detail-header">
                <h3>Title</h3>
            </div>
            <div class="detail-body">
                <p>Content</p>
                <p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p>
                <p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p>
                <p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p>
                <p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p><p>Content</p>

            </div>
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

