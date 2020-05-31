<template>
<div class="cv-back">
  <div class="sidenav">
  <download-button :inputTime='this.downloadExpectedTime' />
  <button class="btn btn-info" @click="addSubPage">Add Page</button>
</div>

  <!-- cv contents -->
  <div class="cv" ref="cv">
    <link rel="stylesheet" :href="templatePath">
    <div class="cv-contents" ref="cv-contents">
      <cvPage pageId=0 pageType="main" />

    </div>
  </div>
</div>
</template>


<script>
import downloadButton from "@/components/downloadButton";
import cvPage from "@/components/cvMaker/cvMakerPage";
import Vue from 'vue';

import {
  bus
} from '@/view/index/main';

export default {
  name: 'cv',
  props: ['templateId'],
  data() {
    return {
      maxPageId: 0,
      // This parameter should call the thread status of the system about the download feedback
      downloadExpectedTime: 5000,
    }

  },
  components: {
    downloadButton,
    cvPage,
  },
  methods: {
    generatePdf() {
      let reqBody = {
        htmlHeaders: document.head.innerHTML,
        cvContents: this.$refs.cv.innerHTML,
        templateId: this.templateId
      }
      this.$http.post(this.serverRootUrl + '/api/toPdf', reqBody, {
          responseType: 'arraybuffer'
        })
        .then(res => {
          let blob = new Blob([res.data]);
          let link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = "cv.pdf";
          link.click();
        })
        .catch(err => console.log(err));
    },
    addSubPage(){
      const cvPageClass = Vue.extend(cvPage);
      let newPage = new cvPageClass({
        propsData:{
          pageId: ++this.maxPageId,
          pageType: 'sub',
        }
      });
      newPage.$mount();
      this.$refs['cv-contents'].appendChild(newPage.$el);
    },
  },
  computed: {
    templatePath() {
      const url = this.serverRootUrl + '/api/template/template.css';
      const query = `?id=${this.templateId}`;
      return url + query;
    }
  },
  created() {
    bus.$on('downloadAsPdfClick', this.generatePdf);
  }
}
</script>

<style scoped src='../view/index/assets/cvMaker.css'>
</style>
