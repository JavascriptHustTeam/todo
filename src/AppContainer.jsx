import React, { useState } from "react";
import { Row, Col } from "antd";

import { Header, Form, ListTodo } from "components";

const AppContainer = () => {
	const [todos, setTodos] = useState([
		{ id: 1, value: "Implement Authentication", done: false }
	]);
	const [submitting, setSubmitting] = useState(false);

	const handleCreateNewTodo = value => {
		setSubmitting(true);
		const lastTodo = todos[0];
		setTodos([
			{ id: lastTodo ? lastTodo.id + 1 : 1, value, done: false },
			...todos
		]);
		setSubmitting(false);
	};

	const handleMarkAsDone = todo => {
		const index = todos.indexOf(todo);
		if (index !== -1) {
			if (todos[index].done === true) todos[index].done = false;
			else todos[index].done = true;

			setTodos([...todos]);
		}
	};

	const handleDelete = todo => {
		const index = todos.indexOf(todo);
		if (index !== -1) {
			todos.splice(index, 1);
			setTodos([...todos]);
		}
	};

	return (
		<div className="App">
			<Row>
				<Col offset={6} span={12}>
					<Header />
					<Form submitting={submitting} onCreateNewTodo={handleCreateNewTodo} />
					<ListTodo
						onMarkAsDone={handleMarkAsDone}
						onDelete={handleDelete}
						todos={todos}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default AppContainer;
