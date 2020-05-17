<template>
    <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"  @click="homeClick">Make Your Own Resume</a>
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
                    <a class="nav-link" href="#">
                        <i class="fa fa-envelope-o">
                            <span class="badge badge-danger"></span>
                        </i>
                        About
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-envelope-o">
                            <span class="badge badge-primary"></span>
                        </i>
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="loginClick">
                        <i class="fa fa-bell">
                            <span class="badge badge-info"></span>
                        </i>
                        Sign In
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="registerClick">
                        <i class="fa fa-globe">
                            <span class="badge badge-success"></span>
                        </i>
                        Sign Up
                    </a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Menu",
            data:function () {
            return{
            }
        },
        methods:{
            homeClick(){
                this.$router.replace('/home')
          },
            loginClick(){
                this.$router.replace('/login')
            },
            registerClick(){
                this.$router.replace('/register')
            }
        }
    }
</script>

<style scoped>

</style>
