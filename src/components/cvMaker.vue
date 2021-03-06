<template>
<div class="cv-back">
  <div class="sidenav toolsBarSize">
    <download-button :inputTime='this.downloadExpectedTime' />
    <div>
      <div @click="saveProgress" class="sameLineDisplay">
        <save-button/>
      </div>
      <div @click="loadSavedData" class="sameLineDisplay">
        <load-button/>
      </div>
    </div>
    <div>
      <div @click="addSubPage" class="sameLineDisplay">
        <add-button/>
      </div>
      <div @click="deleteLastSubPage" class="sameLineDisplay">
        <remove-button/>
      </div>
    </div>
    <div>
      <div @click="insertElement" class="sameLineDisplay">
        <add-element-button/>
      </div>
      <div @click="deleteElement" class="sameLineDisplay">
        <remove-element-button/>
      </div>
    </div>
  <div>
    <div  @click="increaseFontSize"   class="sameLineDisplay">
      <big-font-button ref="increase"/>
    </div>
    <div @click="decreaseFontSize" class="sameLineDisplay">
      <small-font-button ref="decrease"/>
    </div>
  </div>
    <div>
      <div @click="boldifyText" class="sameLineDisplay">
        <bold-font-button ref="bold"/>
      </div>
      <div @click="italicizeText" class="sameLineDisplay">
        <incline-font-button ref="incline"/>
      </div>
    </div>
</div>

  <!-- cv contents -->
  <div class="cv" ref="cv" @mousemove="handleMousemove" @click="handleMouseClick" @mouseup="handleMouseup">
    <div class="cv-contents" ref="cv-contents">
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
import removeElementButton from "@/components/button/removeElementButton";
import bigFontButton from "@/components/button/bigFontButton";
import smallFontButton from "@/components/button/smallFontButton";
import boldFontButton from "@/components/button/boldFontButton";
import saveButton from "@/components/button/saveButton";
import loadButton from "@/components/button/loadButton";
import inclineFontButton from "@/components/button/inclineFontButton";
import cvPage from "@/components/cvMaker/cvMakerPage";
import Vue from 'vue';

const MODE_EDIT           = 1,
      MODE_INSERT         = 2,
      MODE_DELETE         = 3,
      MODE_ITALICISE      = 4,
      MODE_BOLDIFY        = 5,
      MODE_INC_FONT_SIZE  = 6,
      MODE_DEC_FONT_SIZE  = 7;

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

async function getElemByRef(ref, vue){
  return new Promise((resolve) => {
    let elems = vue.$refs[ref];
    if(elems) resolve(elems);
  })
}

import {
  bus
} from '@/view/index/main';

export default {
  name: 'cv',
  props: {
    // templateId: Number,
    // fetchSavedData: Boolean,
  },
  data() {
    return {
      mode: MODE_EDIT,
      templateId: 0,
      fetchSavedData: false,

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
    saveButton,
    loadButton,
    addButton,
    removeButton,
    addElementButton,
    removeElementButton,
    bigFontButton,
    smallFontButton,
    boldFontButton,
    inclineFontButton,
    cvPage,
  },
  methods: {
    animateProgressSaved(){
      this.$confirm("", "Saved", "success");
    },
    // returns null on succees
    async saveProgress(){
      let cvContents = await getElemByRef('cv-contents', this);
      let avatarImg = document.querySelectorAll('#avatar-img')[0];

      let reqBody = {
        htmlHeaders: document.head.innerHTML,
        cvContents: cvContents.innerHTML,
        templateId: this.templateId,
        avatarUrl: avatarImg.src,
      }

      try{
        let res = await this.$http.post('/api/cvMaker/save', reqBody);
        if(res.status === 201){
          this.animateProgressSaved();
          return null;
        }
        else{
          this.$alert('save failed',"Error",'error');
        }
      }catch(err){
        if(err.status === 401){
          return this.$alert('Please log in first','Error','error');
        }
        console.log(err);
        this.$alert('save failed','Error','error');
        return err;
      }
    },
    async loadSavedData(){
      try{
        let res = await this.$http.get('/api/cvMaker/load');
        if(res.status === 200){
          let htmlHeaders = res.body.htmlHeaders;
          let cvContents = res.body.cvContents;
          let avatarUrl = res.body.avatarUrl;

          // change avatar
          let avatarImg = document.querySelectorAll('#avatar-img')[0];
          avatarImg.src = avatarUrl;

          let domParser = new DOMParser();
          let doc = domParser.parseFromString(htmlHeaders, 'text/html');

          document.head.replaceWith(doc.head);


          // replace children nodes
          // keeps elems that have event listeners
          let old_div_A4paper = this.$refs['cv-contents'].firstElementChild;
          let new_div_A4paper = domParser.parseFromString(cvContents, 'text/html').body.firstChild;


          while(new_div_A4paper){
            if(!old_div_A4paper){ // page not enough
              this.addSubPage();
              old_div_A4paper = this.$refs['cv-contents'].lastElementChild;
            }


            let new_div_cvPage = new_div_A4paper.firstElementChild;
            let new_elem = new_div_cvPage.firstElementChild;

            let old_div_cvPage = old_div_A4paper.firstElementChild;
            let old_elem = old_div_cvPage.firstElementChild;
            // handle 'dont-replace' elems
            // which should be the direct children of elem with 'cv-page' attr
            while(new_elem){
              if(old_elem){ // old elem enough
                const is_old_replacable = !old_elem.hasAttribute('dont-replace');
                const is_new_replacable = !new_elem.hasAttribute('dont-replace');
                if(is_old_replacable && is_new_replacable){
                  let temp = old_elem.nextSibling;
                  old_elem.insertAdjacentHTML('beforebegin', new_elem.outerHTML);
                  new_elem = new_elem.nextSibling;
                  old_div_cvPage.removeChild(old_elem);
                  old_elem = temp;
                }else if(!is_old_replacable && !is_new_replacable){
                  old_elem = old_elem.nextSibling;
                  new_elem = new_elem.nextSibling;
                }else if(!is_new_replacable){
                  let temp = old_elem.nextSibling;
                  old_div_cvPage.removeChild(old_elem);
                  old_elem = temp;
                }else{
                  old_elem.insertAdjacentHTML('beforebegin', new_elem.outerHTML);
                  new_elem = new_elem.nextSibling;
                }
              }else{  // old elem exhausted
                old_div_cvPage.appendChild(new_elem);
                new_elem = new_elem.nextSibling;
              }
            }
            new_div_A4paper = new_div_A4paper.nextSibling;
            old_div_A4paper = old_div_A4paper.nextSibling;
          } // new page exhausted
          while(old_div_A4paper){ // remove excessive page
            let temp = old_div_A4paper.nextSibling;
            this.$refs['cv-contents'].removeChild(old_div_A4paper);
            old_div_A4paper = temp;
          }

        }else{
          this.$alert('Load failed.','Error','error');
        }
      }catch(err){
        if(err.status === 401){
          return this.$alert('Please log in first','Error','error');
        }else if(err.status === 404){
          return this.$alert("There's nothing to load.",'Warning','warning');
        }
        console.log(err);
        this.alert('Load failed.','Error','error');
      }
    },
    async generatePdf() {
      let rv = await this.saveProgress();
      if(rv !== null) return; // save failed

      try{
        let res = await this.$http.get('/api/toPdf', {
            responseType: 'arraybuffer'
          });
        let blob = new Blob([res.data]);
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "cv.pdf";
        link.click();
      }catch(err){
        console.log(err);
        this.$alert('Failed','Error','error');
      }

    },
    addSubPage(){
      if(this.maxPageId >= 5) return this.$alert('A concise CV is a good CV.','Warning','warning');

      const cvPageClass = Vue.extend(cvPage);
      let newPage = new cvPageClass({
        propsData:{
          pageId: ++this.maxPageId,
          pageType: 'sub',
        }
      });
      newPage.$mount();
      this.$refs['cv-contents'].appendChild(newPage.$el);

      newPage.$el.scrollIntoView(true);
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
      }else{
        return;
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
    },
    fetchTemplate(){
      const templateElemId = 'cv-template'
      if(this.templateId === undefined) return;
      // removing existing template
      let existingTemplates = document.querySelectorAll(`#${templateElemId}`);
      for(let templateNode of existingTemplates){
        document.head.removeChild(templateNode);
      }
      // add template
      const styleElemHTML = `<link id="${templateElemId}" rel="stylesheet" href="${this.templatePath}">`
      document.head.insertAdjacentHTML('beforeend', styleElemHTML);
      // perhaps find a better way
      // this.$forceUpdate();
      // console.log('template applied.');
    },
    recoverAllButtons(){
      this.$refs.incline.recovery();
      this.$refs.bold.recovery();
      this.$refs.increase.recovery();
      this.$refs.decrease.recovery();
    }
    ,
    italicizeText(){
      this.recoverAllButtons();
      if(this.mode !== MODE_ITALICISE){
        this.mode = MODE_ITALICISE;
        this.$refs.incline.active();
      }else{
        this.mode = MODE_EDIT;
      }

    },
    boldifyText(){
      this.recoverAllButtons();
      if(this.mode !== MODE_BOLDIFY){
        this.mode = MODE_BOLDIFY;
        this.$refs.bold.active();
      }else{
        this.mode = MODE_EDIT;
      }
    },
    increaseFontSize(){
      this.recoverAllButtons();
      if(this.mode !== MODE_INC_FONT_SIZE){
        this.mode = MODE_INC_FONT_SIZE;
        this.$refs.increase.active();
      }else{
        this.mode = MODE_EDIT;
      }
    },
    decreaseFontSize(){
      this.recoverAllButtons();
      if(this.mode !== MODE_DEC_FONT_SIZE){
        this.mode = MODE_DEC_FONT_SIZE;
        this.$refs.decrease.active();
      }else{
        this.mode = MODE_EDIT;
      }
    },
    handleMouseup(){
      // console.log('mouseup');
      // console.log(this.mode);
      let tag = null;
      switch(this.mode){
        case MODE_ITALICISE:
          tag = 'i'; break;
        case MODE_BOLDIFY:
          tag = 'b'; break;
        case MODE_INC_FONT_SIZE:
          tag = 'larger'; break;
        case MODE_DEC_FONT_SIZE:
          tag = 'smaller'; break;

        default: return;
      }

      const selection = window.getSelection();
      // console.log(selection);
      const selectedText = selection.toString();

      const range = selection.getRangeAt(0);
      range.deleteContents();
      let elem = document.createElement(tag);
      elem.textContent = selectedText;
      range.insertNode(elem);
    }
  },
  computed: {
    templatePath() {
      const url = '/api/template/template.css';
      const query = `?id=${this.templateId}`;
      return url + query;
    }
  },
  created() {
    // fetch saved data
    const query = this.$router.currentRoute.query;
    this.templateId = query.templateId ? query.templateId : 0;
    this.fetchSavedData = query.fetchSavedData ? query.fetchSavedData : false;

    if(this.fetchSavedData){
      this.loadSavedData();
    }else{
      this.fetchTemplate();
    }

    bus.$on('downloadAsPdfClick', this.generatePdf);
    bus.$on('forceUpdate', this.$forceUpdate);
  },
}
</script>

<style scoped src='../view/index/assets/cvMaker.css'>
</style>
