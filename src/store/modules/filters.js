const state = {
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

const getters = {
	getFilters(state){
		return state.filtersData
	},
	getFilter(state, index) {
		return state.filtersData[index]
	}
}

const mutation = {
	pushRoleItems(state, {items}) {
		state.filtersData[0].name = "Роль"
		for (var index in items) {
			var item = items[index]
			item.selected = true
			state.filtersData[0].items.push(item)
		} 
	},
	pushLevelItems(state, {items}) {
		state.filtersData[1]
	},
	pushProductItems(state, {items}) {

	},
	pushTagItems(state, {items}) {

	}
}

const actions = {

}