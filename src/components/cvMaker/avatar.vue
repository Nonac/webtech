<template>
  <div dont-replace>
    <div @mouseleave="isMouseOverAvatar = false" v-show="isMouseOverAvatar" class="avatar">
      <imageUploader />
    </div>

    <img @mouseover="isMouseOverAvatar = true" :src="avatarUrl" alt="Your avatar" class="avatar" ref="avatarImg" @load="updateDropbox" />

  </div>

</template>

<script>
import imageUploader from "@/components/cvMaker/imageUploader";
import {
  bus
} from '@/view/index/main';

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
      console.log(JSON.stringify({
        width: ev.path[0].clientWidth,
        height: ev.path[0].clientHeight
      }));
      bus.$emit('updateAvatarFrameSize', {
        width: ev.path[0].clientWidth,
        height: ev.path[0].clientHeight
      });
    },
    created() {
      bus.$on('cvAvatarUploaded', this.changeAvatar);
    },
    mounted() {
      this.changeAvatar(this.avatarUrl);
    }
  }

}

</script>
