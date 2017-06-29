<template>
     <div class="register">
        <div class="container-fluid">
                    <form class =" navbar-form navbar-center" @submit.prevent="register">
                        <h1>Create Your Account!</h1>
                    <div class="form-group">
                            <label class = "sr-only" for="user.name">Name</label>
                                <input type="name" class="form-control" v-model="user.name" required placeholder="name">
                            </div>
                        <div class="form-group">
                            <label class = "sr-only" for="user.email">Email Address</label>
                                <input type="email" class="form-control" v-model="user.email" required placeholder="email">
                            </div>
                            <div class = "form-group">
                                <label class = "sr-only" for="user.password">Password</label>
                                <input type="password" class="form-control" v-model="user.password" required placeholder="password">
                            </div>
                                <button class="btn btn-lg" type="submit">Register</button>
                        </form>                     
             </div>
             <div class = "letter">
                <p>K</p>
            </div>
            <h2><router-link to='/login'>LOGIN</router-link></h2>
        </div>
</template>

<script>
    export default {
        name: 'register',
        data() {
            return {
                user: {}
            }
        },
        computed: {},
        methods: {
            register() {
                this.$store.dispatch('register', this.user)
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

    h2 {
        position: fixed;
        top: 10%;
        right: 0%;
        /* bring your own prefixes */
        transform: translate(-20%, -50%);
        font-size: 30px;
    }
    .navbar-form {
        margin-right: 10px;
    }
     input {
        color: black;
        margin-right: 7px;
        font-size: 17px;
        padding: 25px;
    }
</style>