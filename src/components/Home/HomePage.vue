<template>
<div>
  <top-news></top-news>
  <more-news></more-news>
</div>
</template>

<script>
  import TopNews from './TopNews'
  import MoreNews from './MoreNews'

  export default {
    name: 'home-page',
    components: {
      TopNews,
      MoreNews
    }
  }
</script>