<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Filter component</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://vuetifyjs.com/ru"
        target="_blank"
      >
        <span class="mr-2">Vuetify</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <HelloVuetify/>
    </v-content>
  </v-app>
</template>

<script>
import HelloVuetify from './components/HelloVuetify'

export default {
  name: 'App',
  components: {
    HelloVuetify
  },
  data () {
    return {
      //
    }
  }
}
</script>
