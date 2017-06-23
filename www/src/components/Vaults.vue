<template>
    <div class = "well">
        <button type = "submit" @click = "createVault">Create A Vault!</button>
        <ol>
            <li v-for = "vault in vaults"<router-link :to=" '/vaults/' + vault._id">{{vault.name}}</router-link>
            <span @click = "removeVault(vault)">Delete Vault</span></li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'vaults',
    mounted() {
        this.$store.dispatch('getVaults')
    },
    computed: {
        return this.$store.state.myVaults
    }
}
</script>

<style>
</style>
