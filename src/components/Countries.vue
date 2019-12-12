<template>
  <section class="countries-section">
    <v-row no-gutters>
      <div class="countries-section__input-group">
        <v-icon class="countries-section__icon">mdi-magnify</v-icon>
        <input
          height="56"
          class="countries-section__input"
          placeholder="Search for a country…"
          v-model="keywords"
        />
      </div>

      <div class="countries-section__dropdown">
        <v-select
          :items="items"
          v-model="region"
          color="black"
          label="Filter by Region"
          hide-selected="true"
          dense
          solo
        ></v-select>
      </div>
    </v-row>

    <v-layout wrap class="countries-section__card-container">
      <v-skeleton-loader
        v-show="loading"
        class="countries-section__card"
        v-for="(item, index) in 20"
        :key="index"
        type="card"
        max-width="264"
        width="100%"
        min-height="336"
      ></v-skeleton-loader>

      <v-card
        class="countries-section__card"
        v-for="(country, index) in filteredCountries"
        :key="index"
        max-width="264"
        min-height="336"
        :to="'/about/' + country.name"
      >
        <v-img class="white--text align-end" height="160" :src="country.flag">
        </v-img>

        <v-card-text class="countries-section__card--text">
          <ul class="countries-section__card--list">
            <li class="countries-section__card--list-header">
              {{ country.name }}
            </li>
            <li class="countries-section__card--list-item">
              <strong>Population:</strong>
              {{
                country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}
            </li>
            <li class="countries-section__card--list-item">
              <strong>Region:</strong> {{ country.region }}
            </li>
            <li class="countries-section__card--list-item">
              <strong>Capital:</strong> {{ country.capital }}
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-layout>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    items: ["Africa", "America", "Asia", "Europe", "Oceania"],
    keywords: "",
    region: "",
    results: [],
    loading: true
  }),
  methods: {},
  computed: {
    ...mapGetters(["countries"]),
    filteredCountries() {
      return this.countries.filter(country => {
        return (
          country.name.toLowerCase().match(this.keywords.toLowerCase()) &&
          country.region.match(this.region)
        );
      });
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
};
</script>
