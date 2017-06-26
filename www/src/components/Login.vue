<template>
     <div class="login">
        <div class="container-fluid">
            <h1 class="keeper">KEEPER</h1>
            <div class="jumbotron">
                <div class="well well-sm custom-well-small">
                    <form @submit.prevent="login">
                        <div class="input-group">
                            <span class="input-group-addon fa fa-envelope-open"></span>
                            <div class="col-10">
                                <input type="email" class="form-control" v-model="user.email" required placeholder="email">
                            </div>
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon fa fa-star"></span>
                            <div class="col-10">
                                <input type="password" class="form-control" v-model="user.password" required placeholder="password">
                            </div>
                        </div>
                        <div class="form group row">
                            <div class="col-10">
                                <button class="btn btn-lg" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <h2 class="dungeon">Don't have an account?
                <router-link to='/register'>Register</router-link></h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            user: {}
        }
    },
    computed: {},
    methods: {
        login() {
            this.$store.dispatch('login', this.user)
        }
    },
    components: {}
}
</script>

<style scoped>

    h1 {
        text-align: center;
        font-size: 60px;
        font-weight: bold;
    }

    input {
        color: black;
        margin-bottom: 10px;
        font-size: 17px;
    }

    .well {
        width: 335px;
        margin: 0 auto;
        text-align: center;
        background-color: rgba(100, 100, 100, 0);
        border-color: rgba(100, 100, 100, 0);
    }

   
</style>
