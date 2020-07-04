<template>
  <span></span>
</template>
<script>
export default {
  async created () {
    await this.$store.dispatch('logoutUser')
    this.$router.push({ name: 'login' }).catch(() => {})
  }
}
</script>