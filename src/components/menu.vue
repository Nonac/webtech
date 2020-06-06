<template>
    <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"  @click="homeClick">Simple Resume Maker</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#" @click="homeClick">
                        <i class="fa fa-home"></i>
                        Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"  @click="aboutClick">
                        <i class="fa fa-envelope-o">
                            <span class="badge badge-danger"></span>
                        </i>
                        About Us
                    </a>
                </li>

            </ul>
            <ul class="navbar-nav ">
                <!-- when the user has not logged in -->
                <li class="nav-item" v-if="!isLoggedIn">
                    <a class="nav-link" href="#" @click="loginClick">
                        <i class="fa fa-bell">
                            <span class="badge badge-info"></span>
                        </i>
                        Sign In
                    </a>
                </li>
                <li class="nav-item" v-if="!isLoggedIn">
                    <a class="nav-link" href="#" @click="registerClick">
                        <i class="fa fa-globe">
                            <span class="badge badge-success"></span>
                        </i>
                        Sign Up
                    </a>
                </li>
                <!-- when the user has logged in -->
                <li class="nav-item" v-if="isLoggedIn">
                    <a class="nav-link">
                        <i class="fa fa-globe">
                            <span class="badge badge-success"></span>
                        </i>
                        {{username}}
                    </a>
                </li>

                <li class="nav-item" v-if="isLoggedIn">
                    <a class="nav-link" @click.prevent="signOut">
                        <i class="fa fa-globe">
                            <span class="badge badge-success"></span>
                        </i>
                        Sign out
                    </a>
                </li>

            </ul>

        </div>
    </nav>
</template>

<script>
    import {bus} from '@/view/index/main';

    export default {
        name: "Menu",
        data:function () {
          return{
            isLoggedIn: false,
            username: null
          }
        },
        methods:{
            homeClick(){
                this.$router.replace('/home')
          },
            aboutClick(){
                this.$router.replace('/about')
            },
            loginClick(){
                this.$router.replace('/login')
            },
            registerClick(){
                this.$router.replace('/register')
            },
            signOut(){
              this.$cookies.remove('jwt');
              this.$cookies.remove('username');
              this.usernale = null;
              this.isLoggedIn = false;
            }
        },
        created(){
          bus.$on('loggedIn', () => {
            this.isLoggedIn = true;
            this.username = this.$cookies.get('username');
          });

          // send login status
          bus.$on('getLoginStatus', () => {
            bus.$emit('loginStatus', this.isLoggedIn);
          })

          // check login status
          if(this.$cookies.isKey("jwt") && this.$cookies.isKey("username")){
            this.isLoggedIn = true;
            this.username = this.$cookies.get('username');
          }
        }
    }
</script>
