<template>
    <div><br><br><br><br><br><br><br><br><br><br><br>
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
                        <input type="button" @click="save()" class="btn btn-primary" value="Submit">
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
    export default {
        name: "login",
        data(){
            return{
                userName: "",
                password: "",
                showMyUsername: null,
                showMyPassword: null,
                showDisplay: false

            }

        },
        methods: {
            save(){
                this.showMyUsername= this.userName;
                this.showMyPassword= this.password;
                this.userName="";
                this.password="";
                this.showDisplay= true;

            }
        }
    }
</script>

<style scoped>
</style>
