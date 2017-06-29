<template>
  <div class="vault">
    <div class="row">
        <p class="logout pull-right">
          <button class="logout" @click="logout(user)">Logout</button>
          <button><router-link :to="'/dashboard/'">Back to Vaults</router-link></button>
        </p>
      </div>
    <h2>Welcome to your Keeps!</h2>
    <h2>{{vault.title}}</h2>
    <div class="row">
      <div class= "panel panel-default">
        <div class = "panel-body">
      <div v-for="keep in keeps">
        <div class="col-xs-6 col-sm-2">
        <h1>Title: {{keep.title}}</h1>
        <h1>Body: {{keep.body}}</h1>
        <img :src="keep.imgUrl" class="img-circle" width ="50" height = "50"> 
        </div>
        </div>
        </div>
        </div>
      </div>
    <div class="row">
      <div class="col-xs-8">
        <h3>Create a new Keep!</h3>
        <form @submit.prevent="createKeep">
          <div class="form-group">
            <input type="text" class="form-control-small input-lg" v-model="title" placeholder="Keep Name" required>
          </div>
          <div class="form-group">
            <textarea rows="10" cols="30" class="form-control-small input-lg" v-model="body" placeholder="body"></textarea>
          </div>
          <button class="btn vault" type="submit">Create A Keep</button>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'vault',
    data() {
        return {
            keeps: [],
            title: '',
            // description: '',
            // imgUrl: '',
            // articleUrl: '',
            // shareCount: Number,
            // viewCount: Number,
            // keepCount: Number,
            body: '',
            // tags: '',
            creatorId: this.$store.state.user._id,
            activeVault: this.$store.state.activeVault
        }
    },
    mounted() {
        this.$store.dispatch('getKeepsByVaultId', this.$route.params.id)
    },
    computed: {
        keeps() {
            return this.$store.state.keeps
        },
        vault () {
            return this.$store.state.activeVault
        }
    },
    methods: {
        createKeep() {
            this.$store.dispatch('createKeep', {          
                title: this.title,
                body: this.body,
                creatorId: this.creatorId,                
            })
        },
        logout() {
            this.$store.dispatch('logout', this.user)
        },
        activeKeep(keepId) {
          this.$store.dispatch('getActiveKeep', keepId)
        }
    },
    components: {
  
    }
} 
</script>

<style>
</style>