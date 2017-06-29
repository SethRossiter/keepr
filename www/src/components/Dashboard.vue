<template>
    <div class = "dashboard">
        <nav class = "navbar navbar-inverse navbar-fixed-top">
            <div class = "container-fluid">
                <div class = "navbar-headertext-center">
                    <h1>Welcome to your Vaults, {{user.name}}!</h1>
                    <p>Lets get Keeping!</p>
                    <div class = "buttons">
                    <button class="btn-lg active pull-right" @click="logout(user)">Logout</button>
                    <button class="btn-lg active pull-right"><router-link :to="'/public/'">Public Keeps</router-link></button>
                    </div>
                </div>
            </div>
        </nav>
        <div class = "row">
            <div class = "col-xs-4">
                <h2>Your Vaults</h2>
                <h3>Make a Vault!</h3>
                <form @submit.prevent = "createVault">
                    <div class = "form-group">
                        <input type = "text" class = "form-control" v-model ="title" placeholder="Vault Name" required>
                    </div>
                    <div class = "form-group">
                        <input type = "text" class = "form-control" v-model ="description" placeholder="Description">
                    </div>
                    <button class="btn-lg active" type= "submit">Create Vault</button>
                </form>
        <div class = "row">
            <div v-for = "vault in vaults">
                <div class = "col-xs-8 col-sm-4">
                    <router-link :to=" '/vaults/' + vault._id">
                        <button class="btn-lg active" @click = "activeVault(vault._id)">{{vault.title}}</button>
                    </router-link>
                        <button class="btn-lg active" @click = "removeVault(vault)">Delete</button>
                </div>
            </div>
        </div>
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
        activeVault(vaultId) {
            this.$store.dispatch('getActiveVault', vaultId)
        },
        logout() {
            this.$store.dispatch('logout', this.user)
        }
    }
}
</script>

<style scoped>

input {
        color: black;
        margin-right: 10px;
        margin-top: 200px;
        font-size: 17px;
        padding: 25px;
    }


</style>