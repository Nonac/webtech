// TODO restyle
<template>
<div>
    <br><br><br><br><br>
    <div class="background background-blur"></div>
  <div class="container">
          <div class="card" @click="continueExistingWork">
              <div class="face face1">
                  <div class="content">
                      <div class="icon">
                          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                      </div>
                  </div>
              </div>
              <div class="face face2">
                  <div class="content">
                      <h3>
                          Continue
                      </h3>
                  </div>
              </div>
          </div>
          <div class="card" @click="startNewWork">
              <div class="face face1">
                  <div class="content">
                      <div class="icon">
                          <i class="fa fa-twitter-square" aria-hidden="true"></i>
                      </div>
                  </div>
              </div>
              <div class="face face2">
                  <div class="content">
                      <h3>
                          Start a new one
                      </h3>
                  </div>
              </div>
          </div>
      </div>


</div>
</template>


<script>

import {bus} from '@/view/index/main';

export default {
  data: () => {
    return {
      isLoggedIn: new Promise(()=>{}), // will be resolved by loginBusEventHandler
    }

  },
  components: {},
  methods: {
    loginBusEventHandler(isLoggedIn){
      this.isLoggedIn = Promise.resolve(isLoggedIn);
      bus.$off('loginStatus', this.loginBusEventHandler);
    },
    // returns trus if logged in, false otherwise
    getLoginStatus(){
      bus.$once('loginStatus', this.loginBusEventHandler);
      this.isLoggedIn = new Promise(()=>{});
      bus.$emit('getLoginStatus', null);
    },
    async startNewWork(){
      // double check login status
      await this.getLoginStatus();
      let isLoggedIn = await this.isLoggedIn;

      if(!isLoggedIn){
        return this.$router.replace('/login');
      }
      // ok
      this.$router.push({path:'/selectTemplate'});
    },
    async continueExistingWork(){
      // double check login status
      await this.getLoginStatus();
      let isLoggedIn = await this.isLoggedIn;

      if(!isLoggedIn){
        return this.$router.replace('/login');
      }
      // ok
      try{
        let res = await this.$http.get('/api/cvMaker/has_save');
        if(res.status === 200){

          this.$router.push({path:'cvMaker', query:{templateId: -1, fetchSavedData: true}});
        }
      }catch(err){
        if(err.status === 404){
            return this.$alert("You don't seem to have anything to load.","Warning","warning")
        }
        this.$alert('Load failed.',"Error","error");
      }



    }
  },
  computed: {

  },
  created() {

  }
}
</script>

<style scoped src="../view/index/assets/userProfile.css">

</style>
