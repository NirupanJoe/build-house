const process = (task) => {
	const tasks = (task.tasks || []).map(process);

	return {
		name: task.name,
		tasks: tasks,
		totalCost: (task.cost || 0) + tasks
			.reduce((a, cu) => a + cu.totalCost, 0),
	};
};

const TaskManagement = {
	process,
};

export default TaskManagement;
