<template>
  <v-app :dark=setDark>
    <v-navigation-drawer fixed temporary v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
          <v-list-tile v-if="isAuthenticated" @click="userSignOut">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Sign Out</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <span class='hidden-sm-and-up'>
        <v-toolbar-side-icon @click='sidebar = !sidebar'>
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to='/' tag='span' style='cursor: pointer'>
          <img src="./assets/logo.png" height="38px" width="38px">
          <span class='topline'>
            {{ appTitle }}
          </span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn flat v-if="isAuthenticated" @click="userSignOut">
          <v-icon left>exit_to_app</v-icon>
          Sign Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
          <v-layout justify-center align-center>
            <router-view></router-view>
          </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sidebar: false
    }
  },
  methods: {
    userSignOut () {
      this.$store.dispatch('userSignOut')
    }
  },
  computed: {
    appTitle () {
      return this.$store.state.appTitle
    },
    setDark () {
      return this.$store.getters.isDark
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    menuItems () {
      if (this.isAuthenticated) {
        return [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Options', path: '/options', icon: 'settings' }
        ]
      } else {
        return [
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' }
        ]
      }
    }
  }
}
</script>
<style>
.topline {
  font-size: 28px;
  line-height: 32px;
  vertical-align: 20%;
}
</style>
