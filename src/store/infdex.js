import Vue from 'vue'
import Vuex from 'vuex'

// подключение данных фильтра
import filters from './modules/filters'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		filters
	},
	state: {},
	getters: {},
	mutations: {},
	actions: {}
})

