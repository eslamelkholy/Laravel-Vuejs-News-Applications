<template>
  <v-card-actions >
    <v-btn
      color="primary"
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
  name: 'add-remove-favorites'
  
}
</script>