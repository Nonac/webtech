<template>
    <div>
        <br><br><br><br><br>
        <div class="container">
            <div class="row">
                <div class="col-6 left">
                    <h4> Welcome !</h4>
                    <p>please enter your register details</p>
                    <form>
                        <div class="form-group">
                            <label for="userName">User name</label>
                            <input type="text" v-model="userName" class="form-control" placeholder="Enter Username">

                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="password" class="form-control" placeholder="password">
                        </div>
                        <div class="form-group">
                            <label for="Re-password">Re-Password</label>
                            <br>
                            <label for="Invaild" v-show=" invaildLebalShow" class="invaild">Inconsistent passwords.</label>
                            <input type="re-password" v-model="rePassword" class="form-control" placeholder="Re-password">
                        </div>
                        <input type="button" @click.prevent="submitRegRequest" class="btn btn-primary" value="Submit">
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

    import Utils from "@/js/utils";

    export default {
        name: "register",

        data(){
            return{
                userName: "",
                password: "",
                rePassword:"",
                showMyUsername: null,
                showMyPassword: null,
                showDisplay: false,
                invaildLebalShow:false,
                rePasswordLegal:false,
                key:'abcdefgabcdefg12',
                registrationInfo: ''
            }
        },
        methods: {
            submitRegRequest: function(){
                let newUser = {
                  username: this.userName,
                  password: this.password,
                  email: 'dummy@gmail.com'
                }
                this.$http.post(this.serverRootUrl + '/api/user/register', newUser)
                .then(function(data){
                  console.log(data);
                  if(data.status == 201){ // succeeded
                    alert('Registration succeed.');
                  }else{
                    alert('?');
                  }
                }).catch(function(err){
                  alert(err.body);
                });


            },

            save:function(){
                this.rePasswordLegal = this.rePassword === this.password;

                if(this.rePasswordLegal) {
                    this.showMyUsername= Utils.encrypt(this.userName,this.key);
                    this.showMyPassword= Utils.encrypt(this.password,this.key);
                    this.invaildLebalShow=false;
                    this.userName = "";
                    this.password = "";
                    this.rePassword = "";
                    this.showDisplay = true;
                }else{
                    this.invaildLebalShow=true;
                    this.userName = "";
                    this.password = "";
                    this.rePassword = "";
                    this.showDisplay = true;
                }
            }
        }
    }
</script>

<style scoped src="../view/index/assets/register.css">
</style>
