import { React } from 'react';

const Task = ({ tasks, name, totalCost }) =>
	<div key={ name } className="task-title">
		<div className="task">
			<div className="name">{name}</div>
			<div className="total-cost">{totalCost}</div>
		</div>
		<div>{tasks.map(Task)}</div>
	</div>;

export default Task;
