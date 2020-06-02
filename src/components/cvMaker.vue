<template>
<div class="cv-back">
  <div class="sidenav" style="height: 500px;width: 500px">
    <download-button :inputTime='this.downloadExpectedTime' />
    <div>
      <div @click="addSubPage" style="display: inline-block;">
        <add-button/>
      </div>
      <div @click="deleteLastSubPage" style="display: inline-block;">
        <remove-button/>
      </div>
    </div>
    <div>
      <div @click="insertElement" style="display: inline-block;">
        <add-element-button/>
      </div>
      <div @click="deleteElement" style="display: inline-block;">
        <remove-elemtn-button/>
      </div>
    </div>
</div>

  <!-- cv contents -->
  <div class="cv" ref="cv">
    <link rel="stylesheet" :href="templatePath">
    <div class="cv-contents" ref="cv-contents"
      @mousemove="handleMousemove" @click="handleMouseClick">

      <cvPage pageId=0 pageType="main" />

    </div>
  </div>
</div>
</template>


<script>
import downloadButton from "@/components/button/downloadButton";
import addButton from "@/components/button/addPageButton";
import removeButton from "@/components/button/removePageButton";
import addElementButton from "@/components/button/addElementButton";
import removeElemtnButton from "@/components/button/removeElemtnButton";
import cvPage from "@/components/cvMaker/cvMakerPage";
import Vue from 'vue';

const MODE_EDIT     = 1,
      MODE_INSERT   = 2,
      MODE_DELETE   = 3;

// returns the innermost elem that has the class 'clonable'.
// returns null if 'clonable' is not found before reaching the 'section' tag
function getClonable(elem){
  let elemCurr = elem;
  while(elemCurr !== undefined){
    if(elemCurr.tagName === 'section'){
      return null;
    }

    let classList = elemCurr.classList;
    if(classList === undefined) return null;

    if(classList.contains('clonable')){
      return elemCurr;
    }
    elemCurr = elemCurr.parentNode;
  }
  return null;
}

import {
  bus
} from '@/view/index/main';

export default {
  name: 'cv',
  props: ['templateId'],
  data() {
    return {
      mode: MODE_EDIT,

      maxPageId: 0,
      // This parameter should call the thread status of the system about the download feedback
      downloadExpectedTime: 5000,

      // temp variables for insertion mode
      elemCurr: null,  // elem the cursor pointing at when the event happened
      elemNew: null,  // pre-inserted new elem
      isCursorAtUpperPart: null,
      // igoreMousemove: false,
      // temp var for deletion
      elemToDelete: null,

    }

  },
  components: {
    downloadButton,
    addButton,
    removeButton,
    addElementButton,
    removeElemtnButton,
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
      if(this.maxPageId >= 5) return alert('A concise CV is a good CV.');

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
    deleteLastSubPage(){
      // does not delete the main page
      if(this.maxPageId === 0) return;
      // removes the last sub page
      let pages = this.$refs['cv-contents'].childNodes;
      let realPageCount = pages.length -1;
      if(realPageCount !== this.maxPageId){
        this.maxPageId = realPageCount;
      }
      let lastPage = pages[this.maxPageId--];
      lastPage.parentNode.removeChild(lastPage);
      lastPage.__vue__.$destroy();
    },
    insertElement(){
      this.mode = MODE_INSERT;
    },
    deleteElement(){
      this.mode = MODE_DELETE;
    },
    handleMouseClick(){
      if(this.mode === MODE_EDIT) return;

      if(this.mode === MODE_INSERT){
        if(this.elemNew){
          this.elemNew.classList.remove('preview');
          this.elemNew = null;
          this.elemCurr = null;
          this.isCursorAtUpperPart = null;
        }
      }else if(this.mode === MODE_DELETE){
        if(this.elemToDelete){
          let parentNode = this.elemToDelete.parentNode;
          if(parentNode){
            parentNode.removeChild(this.elemToDelete);
          }
        }
      }

      this.mode = MODE_EDIT;
    },
    handleInsertion(ev){
      let cursorX = ev.clientX;
      let cursorY = ev.clientY;

      let elemAtCursor = document.elementFromPoint(cursorX, cursorY);
      // get the enclosing clonable block
      let clonable = getClonable(elemAtCursor);
      if(clonable === null) return;

      // if its still the same block as the last operation
      if(clonable === this.elemCurr || clonable === this.elemNew) {
        let rect = this.elemCurr.getBoundingClientRect();
        let isCursorAtUpperPart = cursorY < (rect.top + rect.bottom) / 2;
        if(this.isCursorAtUpperPart === isCursorAtUpperPart) return;
        this.isCursorAtUpperPart = isCursorAtUpperPart;
      }

      // if it's a new position
      this.elemCurr = clonable;
      // check cursor relative position to the clonable block (upper/bottom part)
      let rect = clonable.getBoundingClientRect();
      let isCursorAtUpperPart = cursorY < (rect.top + rect.bottom) / 2;

      // remove the pre-inserted elem when the cursor moves to somewhere else
      if(this.elemNew){
        let parentNode = this.elemNew.parentNode;
        if(parentNode){
          parentNode.removeChild(this.elemNew);
        }
      }

      // create insert a new block the same as the current one for preview
      let newElem = clonable.cloneNode(true); // clones the node and all its descendants
      newElem.classList.add('preview');
      if(isCursorAtUpperPart){
        clonable.insertAdjacentElement('beforebegin', newElem);
      }else{
        clonable.insertAdjacentElement('afterend', newElem);
      }
      this.elemNew = newElem;
      // // ignore mousemove event for some time
      // this.igoreMousemove = true;
      // window.setTimeout(() => this.igoreMousemove = false, 100);

    },
    handleDeletion(ev){
      let cursorX = ev.clientX;
      let cursorY = ev.clientY;

      let elemAtCursor = document.elementFromPoint(cursorX, cursorY);
      // get the enclosing clonable block
      let clonable = getClonable(elemAtCursor);
      if(clonable === null) return;
      if(clonable === this.elemToDelete) return;

      if(this.elemToDelete){
        this.elemToDelete.classList.remove('to-be-deleted');
      }
      clonable.classList.add('to-be-deleted');
      this.elemToDelete = clonable;
    },
    handleMousemove(ev){
      // if(this.igoreMousemove) return;
      if(this.mode === MODE_EDIT) return;

      if(this.mode === MODE_INSERT) return this.handleInsertion(ev);
      if(this.mode === MODE_DELETE) return this.handleDeletion(ev);
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
