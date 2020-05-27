<template>
    <div><br><br><br><br><br>
    <div class="container">

            <div class="row">
                <div class="col-6 left">
                    <h4> Welcome back!</h4>
                    <p>please enter your login details</p>
                    <form>
                        <div class="form-group">
                            <label for="userName">User name</label>
                            <input type="text" v-model="userName" class="form-control" placeholder="Enter Username">

                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="password" class="form-control" placeholder="password">
                        </div>
                        <input type="button" @click="submitLoginRequest()" class="btn btn-primary" value="Submit">
                    </form>
                </div>
                <div class="col-6 right" v-if="showDisplay">
                    <h4>Display!</h4>
                    <table class="table table-striped table-dark">
                        <thead>
                        <tr>
                            <th scope="col">UserName</th>
                            <th scope="col">Password</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{{showMyUsername}}</td>
                            <td>{{showMyPassword}}</td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Utils from '@/js/utils.js'
    import {bus} from '@/view/index/main';

    export default {
        name: "login",
        data(){
            return{
                userName: "",
                password: "",
                showMyUsername: null,
                showMyPassword: null,
                showDisplay: false,
                key:'abcdefgabcdefg12'
            }

        },
        methods: {
            save(){
                this.showMyUsername= Utils.encrypt(this.userName,this.key);
                this.showMyPassword= Utils.encrypt(this.password,this.key);
                this.userName="";
                this.password="";
                this.showDisplay= true;

            },
            submitLoginRequest(){
              let user = {
                username: this.userName,
                password: this.password
              }
              this.$http.post(this.serverRootUrl + '/api/user/login', user)
              .then(
                (data) => {
                  if(data.status == 201){
                    alert('Logged in.');
                    const authToken = data.headers.map['auth-token'];
                    const username = data.body.username;
                    this.$cookies.set('jwt', authToken);
                    this.$cookies.set('username', username);
                    bus.$emit('loggedIn', null);
                  }else{
                    alert('当我打出? 不是我有问题而是我觉得你有问题');
                  }
                }
              ).catch(function(err){
                alert(err.body);
              });
            }
        }
    }
</script>

<style scoped src="../view/index/assets/login.css">

</style>
