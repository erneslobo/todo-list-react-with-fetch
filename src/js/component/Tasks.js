import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask }) => {
	return (
		<div>
			<ul className="list-group">
				{tasks.map((task, index) => (
					<Task task={task} key={index} deleteTask={deleteTask} />
				))}
				<li className="list-group-item">
					{`${tasks.length} item left`}
				</li>
			</ul>
		</div>
	);
};

Tasks.propTypes = {
	tasks: PropTypes.array,
	deleteTask: PropTypes.func
};

export default Tasks;
