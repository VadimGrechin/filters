<template>
  <v-layout>
    <v-flex xs12 sm9 md6 lg5 offset-md3>
      <!-- Панель фильтров -->
      <v-toolbar dense flat v-if="filters.length > 0">
        <v-label class="mr-2">
            Фильтр:
        </v-label>
  
        <v-divider class="mx-2" vertical></v-divider>
        <!-- Кнопки фильтров -->
        <v-btn-toggle max
              v-model="currentFilter"
              class="transparent">
          <!-- Если нет доступного фильтра - скрыть кнопку -->
          <v-layout v-for="(filter, index) in filters" :key="index">
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
        <div v-if="filterButtonPressed">
          <v-btn flat
                @click.stop="applyFilter">Применить</v-btn>  
        </div>
      </v-toolbar>

        <div v-if="filterButtonPressed">
          <v-card>
            <v-card-title class="pl-5 pt-3">
              <div class="headline">{{filters[currentFilterIndex].name}}</div>
            </v-card-title>
            <!-- Список элементов фильтра -->
            <v-list>
              <v-list-tile v-for="(item, index) in filters[currentFilterIndex].items" :key="index"
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
                    @click.stop="clearFilter">Очистить</v-btn>
            </v-card-actions>
          </v-card>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      // текущий активный фильтр
      currentFilter: 0,
      filterButtonPressed: false,
      currentFilters: [],
      filtersLoaded: false,
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
    }
  },
  props: {
    filters: Array
  },
  methods: {
    applyFilter() {
      this.currentFilter = undefined
      this.filterButtonPressed = false
      // Применить фильтр к текущим модулям/курсам - передать текущий фильтр родителю
      this.$emit('filter-changed', { currentFilters: this.currentFilters })
    },
    setFilter(index) {
      // загрузить данные из props в локльную переменную. однократно
      if (!this.filtersLoaded) {
        for (let index = 0; index < this.filters.length; index++) {
          this.currentFilters.push(this.filters[index])
        }
        this.filtersLoaded = true
      }
      if (this.currentFilter === index + 1) {
        this.filterButtonPressed = !this.filterButtonPressed
      } else {
        this.filterButtonPressed = true
      }
    },
    clearFilter() {
      // сбросить выбор
      for (let index = 0; index < this.currentFilters[this.currentFilterIndex].items.length; index++) {
        this.currentFilters[this.currentFilterIndex].items[index].selected = false
      }
    }
  },
  computed: {
    // индекс текущего активного фильтра
    currentFilterIndex() {
        return this.currentFilter !== undefined ? this.currentFilter - 1 : 0
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
