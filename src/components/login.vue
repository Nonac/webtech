<template>
    <div><br><br><br><br><br>
        <div class="background background-blur"></div>
        <div class="login">
            <h1>Sign In</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required"  v-model="userName" />
                <input type="password" name="p" placeholder="Password" required="required" v-model="password" />
                <button type="submit" class="btn btn-primary btn-block btn-large" @click.prevent="submitLoginRequest()">Let me in.</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {bus} from '@/view/index/main';

    export default {
        name: "login",
        data(){
            return{
                userName: "",
                password: "",
                showDisplay: false,
            }

        },
        methods: {
            save(){
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
                  if(data.status == 200){
                    alert('Logged in.');
                    const authToken = data.headers.map['auth-token'];
                    const username = data.body.username;
                    this.$cookies.set('jwt', authToken);
                    this.$cookies.set('username', username);
                    bus.$emit('loggedIn', null);
                    this.$router.replace('/userProfile');
                  }else{
                    alert('login failed');
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
