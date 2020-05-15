<template>
    
</template>

<script>
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
                rePasswordLegal:false
            }
        },
        methods: {
            save:function(){
                this.rePasswordLegal = this.rePassword === this.password;

                if(this.rePasswordLegal) {
                    this.showMyUsername = this.userName;
                    this.showMyPassword = this.password;
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

<style scoped>

</style>