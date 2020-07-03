<template>
  <v-snackbar
      v-model="openSnackBar"
      :timeout="7000"
      absolute
      right
      shaped
      top
    >
      {{ dataSucessMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
  name: 'snack-bar',
  props: {
    dataSucessMsg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      snackbar: false
    }
  },
  methods: {
    openSnackBar () {
      if (this.dataSucessMsg) return true
      return false
    }
  }
}
</script>
