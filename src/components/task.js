import { React } from 'react';

const Task = ({ tasks, name, totalCost }) =>
	<div className="task">
		<div>{name}</div>
		<div>{totalCost}</div>
		<div>{tasks.map(Task)}</div>
	</div>;

export default Task;
