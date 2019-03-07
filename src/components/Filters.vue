<template>
  <v-container>
    <!-- Линейка фильтров -->
    <v-toolbar dense flat v-if="filtersData.length > 0">
        <v-label class="mr-2">
          Фильтр по: 
        </v-label>
  
        <v-divider class="mx-2" vertical></v-divider>
        <!-- Кнопки фильтров -->
        <v-btn-toggle max
              v-model="currentFilter"
              class="transparent">
              <!-- Если нет доступного фильтра - скрыть кнопку -->
              <v-layout v-for="(filter, index) in filtersData" :key="index">
                <v-btn 
                      v-if="filter.items.length > 0"
                      :value="index + 1" 
                      @click="setFilter(index)"
                      flat 
                      class="mx-2">
                  {{filter.name}}
                <v-icon>{{index + 1 === currentFilter ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
              </v-btn>
              </v-layout>
        </v-btn-toggle>

        <v-divider
          class="mx-2"
          vertical>
        </v-divider>
  
          <!-- скрыть кнопку пока не нажата одна из кнопок фильтров -->
        <div v-if="currentFilter !== 0">
          <v-btn flat
                @click.stop="applyFilter">Применить</v-btn>  
        </div>
      
      </v-toolbar>
      <div v-if="currentFilter!==0">
        <v-card>
          <v-card-title class="pl-5 pt-3">
            <div class="headline">{{filtersData[currentFilter - 1].name}}</div>
          </v-card-title>

          <!-- Список элементов фильтра -->
          <v-card-text>
            Здесь может быть строка поиска
          </v-card-text>
          <v-list>
            <v-list-tile v-for="(item, index) in filtersData[currentFilter - 1].items" :key="index"
                        style="height:30px">
              <v-list-tile-action>
                <v-checkbox v-model="item.selected" :label="item.name"></v-checkbox>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-divider class="ma-2">
          </v-divider>
          <!-- кнопка очистки -->
          <v-card-actions>
            <v-btn flat 
                  color="blue"
                  @click.stop="clearFilter()">Очистить</v-btn>
          </v-card-actions>

        </v-card>
      </div>
  </v-container>
</template>

<script>
export default {
  name: 'Filters',
  // props: {
  //   filtersData: Object
  // },
  data() {
    return {
      currentFilter: 0,
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
              name: 'Бухналтерия',
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
      ],
      currentFileterIndex: 0,
      selected: []
    }
  },
  methods:{
    applyFilter() {
      let index = this.currentFilter - 1
      console.log(this.filtersData[ index ].items)
      this.currentFilter = 0
    },
    setFilter(index) {
      if(this.currentFilter !== 0)
        this.currentFilter = 0
    },
    clearFilter() {
      // сбросить выбор
      let currentFilter = this.currentFilter - 1
      for (let index = 0; index < this.filtersData[currentFilter].length; index++) {
        this.filtersData[currentFilter].items[index] = false
      }
      console.log(currentFilter)
      console.log(this.filtersData[ currentFilter ].items)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
