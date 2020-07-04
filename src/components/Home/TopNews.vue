<template>
<div>
  <h1>Daily News</h1>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="blue-grey lighten-1 accent-8"
      centered
      dark
      icons-and-text
    >
      <v-tab
        v-for="(article, index) in News"
        :key="index"
        class="subHeadersTabs"
      >
        {{ article.title }}
      </v-tab>
    </v-tabs>
    <v-tabs-items class="arabicContainer" v-model="tab">
      <v-tab-item
        v-for="(article, index) in News"
        :key="index"
      >
        <v-card
    max-width="100%"
    class="mx-auto"
  >
    <v-img
      :src="article.urlToImage"
      height="284"
      width="100%"
    ></v-img>
    <v-card-text>
      <h2 class="marginTopParagraph">{{ article.title }}</h2>
      <p class="marginTopParagraph">{{ article.description }}</p>
    </v-card-text>

    <v-card-actions >
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Favorite
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        See More
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'top-news',
  data () {
    return {
      tab: null
    }
  },
  props: {
    News: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.arabicContainer{
  text-align: right !important;
}
.marginTopParagraph{
  margin-top: 10px;
  font-size: 20px;
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.HeadersTabs{
  font-family: tahoma;
}
.subHeadersTabs{
  font-size: 17px;
  color: white !important;
  font-weight: bold;
}
</style>