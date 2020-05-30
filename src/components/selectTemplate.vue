<template>
<div>
  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Select your CV template</h1>
      <p class="lead text-muted">
        "Quick start with the template you like most."
      </p>
      <p>
        <a class="btn btn-primary my-2">Choose one for me</a>
      </p>
    </div>
  </section>


  <section class="album py-5 bg-light">
    <div class="container" ref="tbvContainer">

    </div>
  </section>

</div>


</template>


<script>

import templateBriefView from "./templateBriefView.vue";
import Vue from 'vue';

export default {
  data: () => {
    return {
      templates:[]
    }

  },
  components: {
  },
  methods: {

  },
  computed: {
    templatePath() {
      const url = this.serverRootUrl + '/api/template/template.css';
      const query = `?id=${this.templateId}`;
      return url + query;
    }
  },
  created() {
    (async () => {
      try{
        // fetch templates from the server
        let res = await this.$http.get(this.serverRootUrl + '/api/template/templateBriefs');
        this.templates = res.body;
        // create templateBriefViews according to the number of templates
        let tbvClass = Vue.extend(templateBriefView);
        for(let template of this.templates){
          let newTbv = new tbvClass({
            propsData:{
              id:template.id,
              thumbnailUrl:template.thumbnailUrl,
              description:template.description}
          });
          newTbv.$mount();
          this.$refs.tbvContainer.appendChild(newTbv.$el);
        }
      }catch(err){
        console.log(err);
      }


    })();
  }
}
</script>

<style scoped src='../view/index/assets/selectTemplate.css'>
</style>
