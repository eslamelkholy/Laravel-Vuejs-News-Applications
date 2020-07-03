<template>
<v-app>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
          class="loginForm"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
      <v-card  width="500" class="mx-auto">
      <v-card-title class="pb-0">
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login" id="check-login-form">
          <v-text-field 
            label="Email" 
            prepend-icon="mdi-account-circle"
            v-model="email"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            label="Password"
            name="password"
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-btn type="submit" color="primary" form="check-login-form" @click="login">
          Login <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
        </v-btn>
      </v-card-actions>
      <v-alert close-icon='$cancel' v-if="serverErrors.length !== 0" dense type="error">
      <ul>
        <li v-for="(value, key) in serverErrors" :key="key">{{ value[0] }}</li>
      </ul>
    </v-alert>
    </v-card>
    </v-col>
    </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      serverErrors: '',
      loading: false,
      showPassword: false
    }
  },
  methods: {
    async login () {
      this.loading = true
      try {
        await this.$store.dispatch('loginUser', { email: this.email, password: this.password })
        this.$router.push({ name: 'home-page' }).catch(() => {})
      } catch (err) {
        this.serverErrors = Object.values(err.response.data.errors)
        this.password = ''
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loginForm{
  margin-top: -200px;
  width: 100%;
}
</style>