import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		search: null,
		tasks: [],
		snackbar: {
			show: false,
			text: '',
		},
		sorting: false,
	},
	mutations: {
		addTask(state, task) {
			state.tasks.push(task)
		},
		removeTask(state, taskId) {
			state.tasks = state.tasks.filter(
				(task) => task.id !== taskId
			)
		},
	},
	actions: {
		addTaskAction(context, payload) {
			context.commit('addTask', payload)
		},
		removeTaskAction(context, payload) {
			context.commit('removeTask', payload)
		},
	},
	getters: {
		tasks(state) {
			return state.tasks
		},
	},
	modules: {},
})
