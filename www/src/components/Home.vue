<template>
    <div class="keeps">
    <form  class="form-inline" @submit.prevent="getKeeps">
      <div class="form-group">
        <h1>Keeps</h1>
        <input type="text" class="form-control" v-model="keep" name= "keep">
        <button type="submit" class="btn btn-primary btn-lg">Search for Keeps</button>
      </div>
    </form>
    <div class="row">
      <div class='col-xs-4 text-center' v-for="keep in keeps">
      <router-link :to=" '/keeps/' + keep._id">
        <div class="panel panel-default"> 
          <img :src="keep.imgUrl" class="img-circle"> 
          <h3>Title: {{keep.title}}</h3>
          <h4>Body: {{keep.body}}</h4>
          <h6>Keep Count: {{keep.keepCount}}</h6>
          <h6>Share Count: {{keep.shareCount}}</h6>
          <h6>View Count: {{keep.viewCount}}</h6>
          <h6>Author: {{keep.author}}</h6>
          <button class="btn lg" @click="addKeep(keep)">Add</button>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'keeps',
    data() {
       this.$store.dispatch('getKeeps')
    },
   computed: {
       keeps() {
           return this.$store.state.keeps
       }
   },
   methods: {
       createKeep() {
           this.$store.dispatch('createKeep', {
               name: "Classic Cars",
               description: "American Classics",
               imgUrl: "https://static.pexels.com/photos/103290/pexels-photo-103290.jpeg",
               articleUrl: "https://www.pexels.com/search/classic%20car/"
           })
       },
       components: {}
   }
   
}
</script>

<style>
</style>