<template>
      <div class="vault">
    <div class="row">
      <div class="col-xs-8">
      </div>
      <div class="col-xs-8">
        <p class="logout pull-right">
          <button class="logout" @click="logout(user)">Logout</button>
          <button><router-link :to="'/vaults/'">Back to Vaults</router-link></button>
        </p>
      </div>
    </div>
    <h2>Welcome to your Keeps!</h2>
    <div class="row">
      <div v-for="keep in keeps">
        <div class="col-xs-6 col-sm-2">
          <router-link :to="'/keeps/'+keep._id">
            {{keep.title}}
            {{keep.description}}
          </router-link>
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
            <textarea rows="10" cols="30" class="form-control-small input-lg" v-model="body" placeholder="Description"></textarea>
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
            title: '',
            description: '',
            creatorId: this.$store.state.user._id,
            activeVault: this.$store.state.activeVault
        }
    },
    mounted() {
        this.$store.dispatch('getKeepsByVaultId', this.activeVault._id)
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
        }
    }
} 
</script>

<style>
</style>