<!-- a card for a template in the selectTemplate page-->

<template>
<div class="templateBriefView col-md-4">
  <div class="card mb-4 box-shadow">
      <img class="card-img-top" alt="template demo image" :src="thumbnailUrl" @click="gotoCvMaker">
    <div class="card-body">
      <p class="card-text">{{description}}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="gotoCvMaker">
          Use
          </button>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  bus
} from '@/view/index/main';

export default {
  name: "templateBriefView",
  props: ['id', 'thumbnailUrl', 'description'],
  methods: {
    gotoCvMaker(){
      this.$router.push({path:'cvMaker', query:{templateId: this.id}});
      bus.$emit('forceReload', null);
    }
  },
  created() {
    if (!this.id) this.id = 0;
  }

}
</script>

<style scoped>
img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

img.card-img-top {
  height: 487px;
}

.card-body{
  border-top: black solid 1px;
}
</style>
