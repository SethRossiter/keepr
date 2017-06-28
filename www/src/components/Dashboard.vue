<template>
    <div class = "dashboard">
        <nav class = "navbar navbar-default">
            <div class = "container-fluid">
                <div class = "navbar-header">
                    <h1>Welcome to your Vaults, {{user.name}}!</h1>
                    <p>Lets get Keeping!</p>
                    <button class = "logout" @click="logout(user)">Logout</button>
                </div>
            </div>
        </nav>
        <h2>Your Vaults</h2>
        <div class = "row">
            <div v-for = "vault in vaults">
                <div class = "col-xs-8 col-sm-4">
                    <router-link :to=" '/vaults/' + vault._id">
                        <button @click = "activeVault(vault._id)">{{vault.title}}</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class = "row">
            <div class = "col-xs-8 col-sm-4">
                <h3>Make a Vault!</h3>
                <form @submit.prevent = "createVault">
                    <div class = "form-group">
                        <input type = "text" class = "form-control" v-model ="title" placeholder="Vault Name" required>
                    </div>
                    <div class = "form-group">
                        <input type = "text" class = "form-control" v-model ="description" placeholder="Description">
                    </div>
                    <button class = "btn" type= "submit">Create Vault</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {
            title: '',
            description: '',
            creatorId: this.$store.state.user._id
        }
    },
    mounted() {
        this.$store.dispatch('getVaults')
    },
    computed: {
        vaults() {
            return this.$store.state.vaults
        },
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        createVault() {
            this.$store.dispatch('createVault', {
                title: this.title,
                description: this.description,
                creatorId: this.creatorId
            })
        },
        removeVault(vault) {
            this.$store.dispatch('removeVault', vault)
        },
        acitveVault(vaultId) {
            this.$store.dispatch('getActiveVault', vaultId)
        },
        logout() {
            this.$store.dispatch('logout', this.user)
        }
    }
}
</script>

<style>
</style>