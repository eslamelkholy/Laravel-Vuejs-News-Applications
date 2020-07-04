<template>
  <div>
    <h1>Welcome To Favorites {{Favorites}}</h1>
  </div>
</template>

<script>
export default {
  name: 'favorites',
  created () {
    this.$store.dispatch('getFavorites')
  },
  computed: {
    Favorites() {
      console.log(this.$store.getters.getFavorites)
      return this.$store.getters.getFavorites
    }
  }
}
</script>