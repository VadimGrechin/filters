<template>
  <v-container pa-0>
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
