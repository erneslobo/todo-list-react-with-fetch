import React, { useState, useEffect } from "react";
import Tasks from "./Tasks";

const Home = () => {
	const [task, setTask] = useState({ label: "", done: false });
	const [tasks, setTasks] = useState([]);
	const url = "https://assets.breatheco.de/apis/fake/todos/user/Daniela";

	useEffect(() => {
		const getTasks = () => {
			createTaskList2();
			fetchTasks2();
		};
		getTasks();
	}, []);

	// useEffect(() => {
	// 	const getTasks = async () => {
	// 		await createTaskList();
	// 		const taskFromServer = await fetchTasks();
	// 		await setTasks(taskFromServer);
	// 	};
	// 	getTasks();
	// }, []);

	const createTaskList2 = () => {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify([])
		})
			.then(res => res.json())
			.then(data => console.log(data));
	};

	const createTaskList = async () => {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify([])
		});
		const data = await res.json();
		return data;
	};

	let fetchTasks2 = () => {
		fetch(url)
			.then(resp => resp.json())
			.then(data => setTasks(data));
	};

	let fetchTasks = async () => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};

	let addTask = async value => {
		let arr = tasks.slice();
		arr.push({ label: value, done: false });
		const res = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(arr)
		});
		if (res.ok) {
			setTasks(arr);
		}
		setTask({ label: "", done: false });
	};

	let deleteTask = async label => {
		let arr = tasks.filter(task => {
			return task.label != label;
		});
		const res = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(arr)
		});
		if (res.ok) {
			setTasks(arr);
		}
	};

	return (
		<div className="container mt-5 mt-5">
			<h1 className="text-center">To Do List</h1>

			<input
				className="form-control"
				type="text"
				placeholder="What needs to be done?"
				value={task.label}
				onChange={e => setTask(e.target.value)}
				onKeyPress={e =>
					e.key === "Enter" && addTask(e.target.value)
				}></input>
			<Tasks tasks={tasks} deleteTask={deleteTask} />
		</div>
	);
};

export default Home;
