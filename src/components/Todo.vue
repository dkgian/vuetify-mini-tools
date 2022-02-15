<template>
	<v-list flat>
		<v-text-field
			v-model="newTaskTitle"
			label="Add to check list"
			placeholder="new todo..."
			outlined
			class="pa-3"
			clearable
			append-icon="mdi-plus"
			@click:append="addTask"
			@keyup.enter="addTask"
			hide-details
		></v-text-field>
		<!-- <v-subheader>Todo List</v-subheader> -->
		<div v-for="task in tasks" :key="task.id">
			<v-list-item
				@click="doneTask(task.id)"
				:class="{
					'blue lighten-5 ': task.done,
				}"
			>
				<template v-slot:default>
					<v-list-item-action>
						<v-checkbox
							:input-value="task.done"
							color="primary"
						></v-checkbox>
					</v-list-item-action>

					<v-list-item-content>
						<v-list-item-title
							:class="{
								'text-decoration-line-through':
									task.done,
							}"
						>
							{{ task.title }}</v-list-item-title
						>
					</v-list-item-content>

					<v-list-item-action>
						<v-btn
							@click.stop="deleteTask(task.id)"
							icon
						>
							<v-icon color="grey lighten-1"
								>mdi-delete-outline</v-icon
							>
						</v-btn>
					</v-list-item-action>
				</template>
			</v-list-item>

			<v-divider />
		</div>
	</v-list>
</template>

<script>
export default {
	name: 'Todo',

	data: () => ({
		newTaskTitle: '',
	}),

	computed: {
		tasks() {
			return this.$store.getters.tasks
		},
	},
	methods: {
		doneTask(id) {
			let task = this.tasks.find(
				(task) => task.id === id
			)
			task.done = !task.done
		},

		deleteTask(taskId) {
			this.$store.dispatch(
				'removeTaskAction',
				taskId
			)
		},

		addTask() {
			if (this.newTaskTitle) {
				const newTask = {
					id: Date.now(),
					title: this.newTaskTitle,
					text: '',
					done: false,
				}
				this.$store.dispatch(
					'addTaskAction',
					newTask
				)
			}
			this.newTaskTitle = ''
		},
	},
}
</script>
