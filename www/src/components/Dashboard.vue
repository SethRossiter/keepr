<template>
    <div class = "dashboard">
        <nav class = "navbar navbar-inverse navbar-fixed-top">
            <div class = "container-fluid">
                <div class = "navbar-headertext-center">
                    <h1>Welcome to your Vaults, {{user.name}}!</h1>
                    <h3>Lets get Keeping</h3>
                    <div class = "buttons">
                    <button class="btn-lg active pull-right" @click="logout(user)">Logout</button>
                    <button class="btn-lg active pull-right"><router-link :to="'/public/'">Public Keeps</router-link></button>
                    </div>
                </div>
            </div>
        </nav>
        <div class = "row">
            <div class = "col-xs-4">
                <form @submit.prevent = "createVault">
                    <div class = "form-group">
                        <input type = "text" class = "form-control" v-model ="title" placeholder="Vault Name" required>
                        <textarea rows="10" cols="30"  class = "form-control" v-model ="description" placeholder="Description"></textarea>
                    </div>
                    <button class="btn-lg active" type= "submit">Create Vault</button>
                </form>
            </div>
        <div class = "setup">  
        <div v-for = "vault in vaults">
            <div class = "col-xs-12">       
             <div class = "col-xs-10"><router-link :to=" '/vaults/' + vault._id">
                        <button class="btn-lg active" @click = "activeVault(vault._id)">{{vault.title}}</button>
                        </router-link></div>
             <div class ="col-xs-2"><button class="btn-lg active" @click = "removeVault(vault)">Delete</button> </div>      
                 
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
.navbar {
     position: absolute;
}
input {
        color: black;
        margin-right: 10px;
        margin-top: 200px;
        font-size: 17px;
        padding: 25px;
    }

form {
    border-radius: 50px;
    color: black;
    margin-top: 0px;
    margin-left: 50px;
    transform: translate(30%, 20%);
    width: 30%;
    
}
.setup {
    position: absolute;
    display: inline;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -10%);
    font-size: 10px;
}



</style>