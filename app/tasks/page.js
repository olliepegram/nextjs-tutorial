import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import DeleteForm from '../../components/DeleteForm';

const TasksPage = () => {
	return (
		<div className='max-w-lg'>
			<TaskForm />
			<TaskList />
			<DeleteForm />
		</div>
	);
};

export default TasksPage;
