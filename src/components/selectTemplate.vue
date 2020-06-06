<template>
<div>
  <div class="background background-blur"></div>
  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Select your CV template</h1>
      <p class="lead text-muted">
        "Quick start with a template you like."
      </p>
      <p>
        <button @click="chooseRandomTemplate" class="btn btn-primary my-2">
          Choose one for me</button>
      </p>
    </div>
  </section>


  <section class="album py-5">
    <div class="container">

      <div class="row" ref='tbvRow'>


      </div>
    </div>
  </section>
</div>
</template>


<script>
import templateBriefView from "./templateBriefView.vue";
import Vue from 'vue';
import {
  bus
} from '@/view/index/main';

export default {
  data: () => {
    return {
      templates: []
    }

  },
  components: {},
  methods: {
    chooseRandomTemplate(){
      let chosenTemplate = this.templates[Math.floor(Math.random() * this.templates.length)];
      this.$router.push({path:'cvMaker', query:{templateId: chosenTemplate.id}});
      bus.$emit('forceReload', null);
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
    (async () => {
      try {
        // fetch templates from the server
        let res = await this.$http.get('/api/template/templateBriefs');
        this.templates = res.body;
        // create templateBriefViews according to the number of templates
        let tbvClass = Vue.extend(templateBriefView);
        for (let template of this.templates) {
          let newTbv = new tbvClass({
            router: this.$router,
            propsData: {
              id: template.id,
              thumbnailUrl: template.thumbnailUrl,
              description: template.description
            }
          });
          newTbv.$mount();

          this.$refs['tbvRow'].appendChild(newTbv.$el);
        }
      } catch (err) {
        console.log(err);
      }


    })();
  }
}
</script>

<style scoped src="../view/index/assets/selectTemplate.css">
</style>
