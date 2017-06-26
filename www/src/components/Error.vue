<template>
  <div> 
    Error: {{error}}
  </div>
</template>

<script>
export default {
  name: 'error',
  computed:{
    error(){
      return this.$store.state.error
    }
  }
}
</script>

<style scoped>
</style>
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help