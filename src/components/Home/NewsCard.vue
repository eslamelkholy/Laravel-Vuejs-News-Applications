<template>
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
</template>

<script>
import AddRemoveFavorites from '../Favorites/AddRemoveFavorites'
export default {
  name: 'news-card',
  components: {
    AddRemoveFavorites
  },
  props: {
    article: {
      type: Object,
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