<template>
<div class="cv-back">
  <download-button @buttonClicked="buttonPass" :inputTime='this.downloadExpectedTime' />


  <!-- cv contents -->
  <div class="cv" ref="cv">
    <link rel="stylesheet" :href="templatePath">
    <div class="cv-contents">
      <mainPage :pageId=0 />

    </div>
  </div>
</div>
</template>


<script>
import downloadButton from "@/components/downloadButton";
import mainPage from "@/components/cvMaker/cvMakerMainPage";
import {
  bus
} from '@/view/index/main';

export default {
  name: 'cv',
  props: ['templateId'],
  data: () => {
    return {
      // This parameter should call the thread status of the system about the download feedback
      downloadExpectedTime: 5000,
    }

  },
  components: {
    downloadButton,
    mainPage,
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
          var blob = new Blob([res.data]);
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = "cv.pdf";
          link.click();
        })
        .catch(err => console.log(err));
    },
    buttonPass(msg) {
      if (msg === 'true') {
        this.generatePdf()
      }
    }
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
