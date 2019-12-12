<template>
  <v-app>
    <v-app-bar app color="dark" type="header" class="main-header">
      <v-container fluid>
        <div class="d-flex align-center">
          <v-toolbar-title
            ><router-link
              to="/home"
              class="main-header__link"
              style="color: currentColor;"
              >Where in the world?</router-link
            ></v-toolbar-title
          >

          <v-spacer></v-spacer>

          <v-btn
            target="_blank"
            text
            @click="
              $vuetify.theme.dark
                ? ($vuetify.theme.dark = false)
                : ($vuetify.theme.dark = true)
            "
          >
            <v-icon class="main-header__icon">mdi-weather-night</v-icon>
            <span>Dark Mode</span>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-content>
      <router-view :loading="loading"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  data: () => ({
    loading: true
  }),

  created() {
    setTimeout(() => {
      if (this.$data.isOnline) {
        this.getData();
        this.loading = false;
      } else {
        this.loading = false;
      }
    }, 2000);
  },

  methods: {
    ...mapActions(["getData"])
  },

  computed: {}
};
</script>
