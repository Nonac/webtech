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

<style scoped>
.A4paper {
  width: 21cm;
  height: 29.7cm;
  padding: 2cm;
  margin: 1cm auto;
  border: 1px #D3D3D3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

@page {
  size: A4;
  margin: 0;
}
@media print {
  html, body {
    width: 210mm;
    height: 297mm;
  }

  .A4paper{
    margin: auto;
    width: 22.2cm;
    height: 33.08cm;
  }
}

.A4paper, ::after, ::before {
  box-sizing: initial;
}

</style>
