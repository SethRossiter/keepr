<template>
   <div class="vaults">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <h1 class="logo">K</h1>
          <ul>
            <li>
              <li><button type = "button"><router-link :to=" '/home'"><h6>Home</h6></router-link></button></li>  
            </li>
            <li>
              <li><button type = "button"><a @click="logout(this.user)">logout</a></button></li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class = "container">
      <div class = "row">
        <form class= "col-md-3" @submit.prevent= "createVault">
          <input type= "text" v-model = "name" required placeholder= "Vault Name">
          <input type= "text" v-model = "description" required placeholder = "Vault Description">
          <input type= "text" v-model = "imgUrl" required placeholder = "Image Url">
          <input type= "text" v-model = "articleUrl" required placeholder = "Article Url">
          <button type = "submit">Create a Vault</button>
        </form>
        <div class= "col-md-9">
          <div class = "row">
            <div class = "col-md-4" v-for= "vault in vaults">
              <div class= "well">
                <router-link :to=" '/vaults/' + vault._id">
                  <h3>{{vault.name}}</h3>
                  <p>{{vault.description}}</p>
                </router-link>
                <a class = "fa fa-trash" @click="removeVault(vault)"></a>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
    </div>
  </div>        
</template>

<script>
  export default {
    name: 'vaults',
    data() {
      return {
        name: "",
        description: "",
        imgUrl: "",
        articleUrl: "",
        creatorId: this.$store.state.user._id

      }
    },
    created() {
      this.$store.dispatch('getVaults')
    },
    computed: {
      vaults() {
        return this.$store.state.vaults
      },
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout', this.user)
      },
      createVault() {
        this.$store.dispatch('createVault', {
          name: this.name,
          description: this.description,
          imgUrl: this.imgUrl,
          articleUrl: this.articleUrl,
          creatorId: this.creatorId
        })
        // this.name = '',
        // this.description = '',
        // this.imgUrl = '',
        // this.articleUrl = ''
      },
      removeVault(vault) {
        this.$store.dispatch('removeVault', vault)
      },
      activeVault(vaultId) {
        this.$store.dispatch('getActiveVault', vaultId)
      }
    }
  }
</script>

<style>
</style>