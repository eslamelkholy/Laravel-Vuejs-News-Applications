<template>
  <v-container class="moreNewsContainer">
    <h2>Explore More News</h2>
    <v-row>
      <v-col
        v-for="(article, index) in News"
        :key="index"
        cols="6"
      >
      <!-- News Card -->
      <news-card :article="article"></news-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from './NewsCard'

export default {
  name: 'more-news',
  components: {
    NewsCard
  },
  data: () => ({
    show: false,
  }),
  props: {
    News: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import url('./styles/MoreNews.scss');
</style>