<template>
  <v-container class="moreNewsContainer">
    <h2>Explore More News</h2>
    <v-row>
      <v-col
        v-for="(article, index) in News"
        :key="index"
        cols="6"
      >
        <v-card
          class="pa-2 cardContainer"
        >
          <v-img
      :src="article.urlToImage || ''"
      height="200px"
    ></v-img>

    <div class="cardTitle">
    <v-card-subtitle>
      <h3 class="marginTopParagraph">{{ article.title }}</h3>
      {{ article.description }}
    </v-card-subtitle>
    </div>
    <v-divider></v-divider>
    <!-- Add & Remove Favorites Component -->
    <add-remove-favorites :getUserFavoritesId="getUserFavoritesId" :articleId="article.id"></add-remove-favorites>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddRemoveFavorites from '../Favorites/AddRemoveFavorites'

export default {
  name: 'more-news',
  components: {
    AddRemoveFavorites
  },
  data: () => ({
    show: false,
  }),
  props: {
    News: {
      type: Array,
      required: true
    }
  },
  computed: {
    getUserFavoritesId () {
      return this.$store.getters.getUserFavoritesId
    }
  }
}
</script>

<style lang="scss">
@import url('./styles/MoreNews.scss');
</style>