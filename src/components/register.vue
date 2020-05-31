<template>
    <div>
        <br><br><br><br><br>
        <div class="background background-blur"></div>
        <div class="login">
            <h1>Sign Up</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required"  v-model="userName" />
                <input type="text" name="e" placeholder="E-Mail" required="required"  v-model="email" />
                <input type="password" name="p" placeholder="Password" required="required" v-model="password" />
                <input type="password" name="r" placeholder="Re-Password" required="required" v-model="rePassword" />
                <button type="submit" class="btn btn-primary btn-block btn-large" @click.prevent="submitRegRequest">Summit.</button>
            </form>
        </div>
    </div>
</template>

<script>

    import {bus} from '@/view/index/main';

    export default {
        name: "register",

        data(){
            return{
                userName: "",
                email: "",
                password: "",
                rePassword:"",
            }
        },
        methods: {
            submitRegRequest: function(){
                let newUser = {
                  username: this.userName,
                  password: this.password,
                  email: this.email
                }
                this.$http.post(this.serverRootUrl + '/api/user/register', newUser)
                .then(function(data){
                    if(this.password!==this.rePassword){
                        alert("Incorrect Re-Password.")
                    }else if(data.status === 201){ // succeeded
                        alert('Registration succeed.');
                        const authToken = data.headers.map['auth-token'];
                        const username = data.body.username;
                        this.$cookies.set('jwt', authToken);
                        this.$cookies.set('username', username);
                        // inform menu.vue that the user has logged in
                        bus.$emit('loggedIn', null);
                  }else{
                    alert('当我打出? 不是我有问题而是我觉得你有问题');
                  }
                }).catch(function(err){
                  alert(err.body);
                });
            },
        }
    }
</script>

<style scoped src="../view/index/assets/register.css">
</style>
