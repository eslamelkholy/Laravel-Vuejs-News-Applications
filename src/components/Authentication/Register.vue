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
        <v-form>
          <v-text-field 
            label="Name" 
            prepend-icon="mdi-face"
          />
          <v-text-field 
            label="Username" 
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            label="Email" 
            prepend-icon="mdi-email"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info">Register</v-btn>
      </v-card-actions>
      <v-card-actions>
        <span id="spanLogin">Already Have An Account ? </span> <v-btn small>Login</v-btn>
      </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Register',
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