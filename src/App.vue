<template>
  <div id="app">
    <v-app class="appBar">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>NewsPaper</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest News</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
        <div class="appBar">
          <router-view></router-view>
        </div>
  </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style scoped>
.appBar{
  margin-top: 40px;
}
</style>