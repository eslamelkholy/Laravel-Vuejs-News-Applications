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
        <h2>Register</h2>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="register" v-model="valid" ref="form" :lazy-validation="lazy" id="check-register-form">
          <v-text-field 
            label="Email" 
            prepend-icon="mdi-email"
            v-model="email"
            :rules="emailRules"
          />
          <v-text-field 
            label="Name" 
            prepend-icon="mdi-face"
            v-model="name"
            :rules="nameRules"
          />
          <v-text-field 
            label="Username" 
            prepend-icon="mdi-account-circle"
            v-model="username"
            :rules="usernameRules"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn type="submit" form="check-register-form" large color="primary" @click.prevent="register">Register
          <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <span id="spanLogin">Already Have An Account ? </span> <v-btn small>Login</v-btn>
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
  name: 'login',
  data () {
    return {
      email: '',
      username: '',
      name: '',
      password: '',
      serverErrors: [],
      valid: true,
      loading: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      nameRules: [
        v => !!v || 'Name is required'
      ],
      usernameRules: [
        v => !!v || 'Password is required'
      ],
      dataSucessMsg: 'Congratulations! Password Has Been Sent to Your Mail',
      lazy: false
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    async register () {
      this.$refs.form.validate()
      if (!this.valid) return
      try {
        this.loading = true
        await this.$store.dispatch('registerUser', { email: this.email, password: this.password, username: this.username, name: this.name })
        this.$router.push({ name: 'home-page', params: { dataSucessMsg: this.dataSucessMsg } }).catch(() => {})
      } catch (err) {
        this.serverErrors = Object.values(err.response.data.errors)
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
#spanLogin{
      margin-right: 8px;
    color: blue;
}
</style>