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
      :src="article.urlToImage"
      height="200px"
    ></v-img>

    <div class="cardTitle">
    <v-card-subtitle>
      <h3 class="marginTopParagraph">{{ article.title }}</h3>
      {{ article.description }}
    </v-card-subtitle>
    </div>
<v-divider></v-divider>
    <v-card-actions class="cardActions">
      <v-btn text>Favorite</v-btn>
      <v-btn color="purple" text>See More </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'more-news',
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
.moreNewsContainer{
  margin-top: 30px;
}
.cardContainer{
  height: 100%;
}
.cardActions{
}
.cardTitle{
  height: 141px;
    text-align: right;
}
</style>