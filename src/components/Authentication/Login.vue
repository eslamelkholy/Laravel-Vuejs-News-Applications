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
        <v-form>
          <v-text-field 
            label="Username" 
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
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
      showPassword: false
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