<template>
  <div dont-replace>
    <div @mouseleave="isMouseOverAvatar = false" v-show="isMouseOverAvatar" class="avatar">
      <imageUploader />
    </div>

    <img id="avatar-img" @mouseover="isMouseOverAvatar = true" :src="avatarUrl" alt="Your avatar" class="avatar" ref="avatarImg" @load="updateDropbox" />

  </div>

</template>

<script>
import {
  bus
} from '@/view/index/main';

import imageUploader from "@/components/cvMaker/imageUploader";
export default{
  components:{
    imageUploader,
  },
  data(){
    return{
      avatarUrl: '/img/templates/example_avatar.png',
      isMouseOverAvatar: false,
    }
  },
  methods:{
    changeAvatar(avatarUrl) {
      this.avatarUrl = avatarUrl;
    },
    updateDropbox(ev) {
      bus.$emit('updateAvatarFrameSize', {
        width: ev.path[0].clientWidth,
        height: ev.path[0].clientHeight
      });
    },

  },
  mounted() {
    bus.$on('cvAvatarUploaded', this.changeAvatar);
    this.changeAvatar(this.avatarUrl);
  }

}

</script>
