import React from "react";
import PropTypes from "prop-types";

const Task = ({ task, deleteTask }) => {
	return (
		<li className="list-group-item">
			{task.label}
			<i
				className="fas fa-times float-end hide"
				onClick={() => deleteTask(task.label)}></i>
		</li>
	);
};

Task.propTypes = {
	task: PropTypes.object,
	deleteTask: PropTypes.func
};

export default Task;
