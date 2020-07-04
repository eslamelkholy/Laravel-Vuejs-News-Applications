<template>
<div>
  <h1>Daily News</h1>
  <v-card>
    <v-tabs
      v-model="tab"
    background-color="gray"
    light
    class="HeadersTabs"
    >
      <v-tab
        v-for="(article, index) in News"
        :key="index"
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
      height="304"
      width="100%"
    ></v-img>
    <v-card-text>
      <h2 class="marginTopParagraph">{{ article.title }}</h2>
      <p class="marginTopParagraph">{{ article.description }}</p>
    </v-card-text>

    <v-card-actions>
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
      tab: null,
      items: [
        { tab: 'One', content: 'Tab 1 Content' },
        { tab: 'Two', content: 'Tab 2 Content' },
        { tab: 'Three', content: 'Tab 3 Content' },
        { tab: 'Four', content: 'Tab 4 Content' },
        { tab: 'Five', content: 'Tab 5 Content' },
        { tab: 'Six', content: 'Tab 6 Content' },
        { tab: 'Seven', content: 'Tab 7 Content' },
        { tab: 'Eight', content: 'Tab 8 Content' },
        { tab: 'Nine', content: 'Tab 9 Content' },
        { tab: 'Te234n', content: 'Tab 10 Content' },
      ],
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
  height: 89px;
}
</style>