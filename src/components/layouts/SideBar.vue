<template>
  <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
          </v-row>
          <v-list-item
            v-else
            :key="item.text"
            link
            @click.stop="RouteUser(item.routeName)"
          >
            <v-list-item-action>
              <v-icon large color="blue darken-2">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <h3>{{ item.text }}</h3>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'side-bar',
  data: () => ({
    items: [
      { icon: 'mdi-home', text: 'Home', routeName: 'home-page' },
      { icon: 'mdi-star', text: 'Favorites', routeName: 'favorites' },
      { icon: 'mdi-help', text: 'About', routeName: 'about' },
      { icon: 'mdi-login', text: 'Login', routeName: 'login' },
      { icon: 'mdi-account-circle', text: 'Register', routeName: 'register' },
      { icon: 'mdi-lock-open', text: 'Logout', routeName: 'logout' },
    ]
  }),
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    RouteUser (routeName) {
      this.$router.push({ name: routeName }).catch(() => {})
    }
  }
}
</script>
