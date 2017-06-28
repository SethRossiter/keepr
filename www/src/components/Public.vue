<template>
    <div class = "public">
        <nav class = "navbar navbar-inverse navbar-fixed-top">
            <div class = "container">
                <ul class = "nav navbar-nav navbar-left">
                    <li><img src = "logo.jpg"></li>
                </ul>
                <ul class = "nav navbar-nav navbar-right">
                    <li><button><router-link :to="'/dashboard/'">Dashboard</router-link></button></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'public',
    data() {
        return {
            keeps: []
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout',this.user)
        }
    }
}
</script>

<style>
</style>
