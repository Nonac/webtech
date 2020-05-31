<template>
  <div class="A4paper" :ref="thisPageRef" @keyup="checkHeightOverflow">
  <mainPage v-if="pageType === 'main'" />
  <subPage v-if="pageType === 'sub'" />

  </div>

</template>


<script>
import mainPage from "@/components/cvMaker/cvMakerMainPage";
import subPage from "@/components/cvMaker/cvMakerSubPage";

export default {
  props:['pageId', 'pageType'],
  computed:{
    thisPageRef(){
      return `cvPage${this.pageId}`
    },
  },
  components:{
    mainPage,
    subPage,
  },
  methods:{
    // do something if content has overflown the height of this page
    checkHeightOverflow(){
      const elem = this.$refs[this.thisPageRef];
      if(elem.scrollHeight > elem.clientHeight){
        alert(`Page ${this.pageId} is full. Please delete some contents`);
      }
    }
  },

}

</script>
