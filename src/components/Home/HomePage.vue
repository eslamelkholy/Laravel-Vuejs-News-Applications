<template>
<div>
  <top-news :News="News"></top-news>
  <more-news :News="News"></more-news>
  <!-- SnackBar -->
  <div v-if="dataSucessMsg">
    <snack-bar :snackbar="snackbar" :dataSucessMsg="dataSucessMsg"></snack-bar>
  </div>
</div>
</template>

<script>
import TopNews from './TopNews'
import MoreNews from './MoreNews'
import SnackBar from '../../utils/snackbar'

export default {
  name: 'home-page',
  components: {
    TopNews,
    MoreNews,
    SnackBar
  },
  props: {
    dataSucessMsg: {
      type: String
    }
  },
  created () {
    if (this.dataSucessMsg) this.snackbar = true
    this.$store.dispatch('getNews')
  },
  computed: {
    News () {
      console.log(this.$store.getters.getNews)
      return this.$store.getters.getNews
    }
  }
}
</script>