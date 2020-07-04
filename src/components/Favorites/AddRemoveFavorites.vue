<template>
  <v-card-actions >
    <v-btn 
    v-if="getUserFavoritesId.includes(articleId)" 
    color="primary"
    @click.stop="removeFromFavorites"
    >
    UnFavorite
    <v-icon right size="25" color="pink">mdi-star</v-icon>
    </v-btn>

    <v-btn 
    v-else 
    color="primary"
    @click.stop="addToFavorites"
    >
    Favorite
    <v-icon right size="25" color="white">mdi-star</v-icon>
    </v-btn>


    <v-btn
      color="secondary"
    >
      See More
      <v-icon right color="white">mdi-television</v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: 'add-remove-favorites',
  props: {
    articleId: {
      type: Number,
      required: true
    },
    getUserFavoritesId: {
      type: Array,
      required: true
    }
  },
  methods: {
    addToFavorites () {
      this.$store.dispatch('addToFavorites', this.articleId)
    },
    removeFromFavorites () {
      this.$store.dispatch('removeFromFavorites', this.articleId)
    }
  }
  
}
</script>