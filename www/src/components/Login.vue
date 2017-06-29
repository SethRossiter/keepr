<template>
     <div class="login">
        <div class="container-fluid">
                    <form class =" navbar-form navbar-right" @submit.prevent="login">
                        <div class="form-group">
                            <label class = "sr-only" for="user.email">Email Address</label>
                                <input type="email" class="form-control" v-model="user.email" required placeholder="email">
                            </div>
                            <div class = "form-group">
                                <label class = "sr-only" for="user.password">Password</label>
                                <input type="password" class="form-control" v-model="user.password" required placeholder="password">
                            </div>
                        <div class = "checkbox">
                            <label>
                                <input type = "checkbox"> Remember me
                            </label>
                            </div>
                                <button class="btn btn-lg" type="submit">Login</button>
                        </form>                     
             </div>
        <div class = "letter">
            <p>K</p>
        </div>
            <h2><router-link to='/register'>Register</router-link></h2>
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

    .letter {
        position: fixed;
        top: 50%;
        left: 50%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);
        font-size: 500px;
    }

    .navbar-form {
        margin-right: 10px;
    }
    
    .checkbox {
        margin-right: 10px;
    }

    h2 {
        position: fixed;
        top: 10%;
        right: 0%;
        /* bring your own prefixes */
        transform: translate(-20%, -50%);
        font-size: 30px;
    }

    

    input {
        color: black;
        margin-right: 10px;
        font-size: 17px;
        padding: 25px;
    }

  

   

   
</style>
