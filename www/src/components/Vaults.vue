<template>
   <div class="container">
      <div class="row">
        <form class="col-md-3" @submit.prevent="createVault">
          <input type="text" v-model="name" required placeholder="Vault Name">          
          <input type="text" v-model="description" required placeholder="Description of Vault">
          <input type="text" v-model="imgUrl" required placeholder="imgUrl of Vault">
          <input type="text" v-model="articleUrl" required placeholder="articleUrl of Vault">
          <button @click="createVault">Add Vault</button>
        </form>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4" v-for="vault in vaults">
              <div class="well">
                <router-link :to="'/vaults/'+vault._id">
                  <h3>{{vault.name}}</h3>
                  <p>{{vault.description}}</p>
                  <p>{{vault.imgUrl}}</p>
                  <p>{{vault.articleUrl}}</p>
                </router-link>
                <a class="fa fa-trash" @click="removeVault(vault)"></a>
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

      }
    },
    created() {
      this.$store.dispatch('getVaults')
    },
    computed: {
      campaigns() {
        return this.$store.state.vaults
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
          articleUrl: this.articleUrl
        })
        this.name = '',
        this.description = '',
        this.imgUrl = '',
        this.articleUrl = ''
      },
      removeVault(vault) {
        this.$store.dispatch('removeVault', vault)
      },
    }
  }
</script>

<style>
</style>