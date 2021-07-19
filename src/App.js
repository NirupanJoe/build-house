import { React } from 'react';
import './App.scss';
import Task from './components/task';
import context from './core/context';
import TaskManagement from './services/taskManagement';

const App = () => {
	const task = TaskManagement.process(context.config.task);

	return (
		<div className="App">
			{Task(task)}
		</div>
	);
};

export default App;
