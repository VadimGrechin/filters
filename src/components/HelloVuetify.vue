<template>
  <v-container pa-0>
    <!-- <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout> -->
    <Filters :filters="filtersData" @filter-changed="getFilters"/>
  </v-container>
</template>

<script>
import Filters from "./Filters.vue"

  export default {
    data: () => ({
      filtersData: [
        {
          name: 'Роль',
          items: [
            {
              code: 'A',
              name: 'Администратор',
              selected: false,
              count: 0
            },
            {
              code: 'D',
              name: 'Разработчик',
              selected: false,
              count: 0
            },
            {
              code: 'BA',
              name: 'Бизнес-аналитик',
              selected: false,
              count: 0
            },
            {
              code: 'BUH',
              name: 'Бухгалтер',
              selected: false,
              count: 0
            },
            {
              code: 'P',
              name: 'Партнеры по продажам',
              selected: false,
              count: 0
            }
          ]
        },
        {
          name: 'Уровень',
          items: [
            {
              code: 'B',
              name: 'Начальный',
              selected: false,
              count: 0
            },
            {
              code: 'M',
              name: 'Средний',
              selected: false,
              count: 0
            },
            {
              code: 'P',
              name: 'Профессиональный',
              selected: false,
              count: 0
            }
          ]
        },
        {
          name: 'Продукты',
          items: [
            {
              code: 'BUH',
              name: 'Бухгалтерия',
              selected: false,
              count: 0
            },
            {
              code: 'BUHP',
              name: 'Зарплата и управление персоналом',
              selected: false,
              count: 0
            },
            {
              code: 'IT',
              name: 'IT-Enterprise',
              selected: false,
              count: 0
            }
          ]
        },
        {
          name: 'Тэг',
          items: []
        }
      ]
    }),
    components: {
        Filters
      },
    methods: {
      getFilters(currentFilters){
        console.log(currentFilters)
      }
    }
  }
</script>

<style>

</style>
