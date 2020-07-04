<template>
    <div>
      <h2 class="colorPageTitle">Favorites</h2>
  <v-timeline reverse align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
    class="timelineCards"
      v-for="(article, i) in Favorites"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <news-card :article="article"></news-card>
    </v-timeline-item>
  </v-timeline>
    </div>
</template>

<script>
import NewsCard from '../Home/NewsCard'
export default {
  name: 'favorites',
  components: {
    NewsCard
  },
  created () {
    this.$store.dispatch('getFavorites')
  },
  computed: {
    Favorites() {
      console.log(this.$store.getters.getFavorites)
      return this.$store.getters.getFavorites
    }
  },
  data: () => ({
    item: {color: 'red lighten-2', icon: 'mdi-star', }
    })
}
</script>

<style lang="scss">
@import url('./styles/Favorites.scss');
</style>