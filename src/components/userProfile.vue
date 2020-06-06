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
                          <svg class="svg" id="continue_1" data-name="continue 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                              <title>continue</title>
                              <path class="circle fillWhite" d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2m0-2A20,20,0,1,0,40,20,20,20,0,0,0,20,0Z"/>
                              <path class="middle-line fillWhite" d="M8.07,21.62H29a1.5,1.5,0,0,0,0-3H8.07a1.5,1.5,0,0,0,0,3Z"/>
                              <path class="fillWhite" d="M23.43,12.79l7.31,7.32A1.5,1.5,0,0,0,32.87,18l-7.32-7.32a1.5,1.5,0,0,0-2.12,2.12Z" />
                              <path class="fillWhite" d="M31.28,18.82l-7.76,7.75a1.5,1.5,0,0,0,2.13,2.12l7.75-7.75a1.5,1.5,0,1,0-2.12-2.12Z"/>
                          </svg>
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
                          <svg class="svg" id="add_1" data-name="add 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                              <title>1</title>
                              <path class="circle fillWhite" d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2m0-2A20,20,0,1,0,40,20,20,20,0,0,0,20,0Z" />
                              <path class="fillWhite" d="M8.07,21.62H33a1.5,1.5,0,0,0,0-3H8.07a1.5,1.5,0,0,0,0,3Z" />
                              <path class="fillWhite" d="M18.71,7.48V32.4a1.5,1.5,0,0,0,3,0V7.48a1.5,1.5,0,0,0-3,0Z"/>
                          </svg>
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
