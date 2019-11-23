import React, { PureComponent } from "react";
import { Row, Col } from "antd";

import { Header, Form, ListTodo } from "components";

export default class AppContainer extends PureComponent {
	state = {
		todos: [{ id: 1, value: "Implement Authentication", done: false }]
	};

	handleCreateNewTodo = value => {
		const { todos } = this.state;

		const lastTodo = todos[0];
		const newTodo = { id: lastTodo ? lastTodo.id + 1 : 1, value, done: false };
		todos.unshift(newTodo);

		this.setState({ todos: [...todos] });
	};

	handleMarkAsDone = todo => {
		const { todos } = this.state;

		const index = todos.indexOf(todo);
		if (index !== -1) {
			if (todos[index].done === true) todos[index].done = false;
			else todos[index].done = true;
			
			this.setState({ todos: [...todos] });
		}
	};

	handleDelete = todo => {
		const { todos } = this.state;

		const index = todos.indexOf(todo);
		if (index !== -1) {
			todos.splice(index, 1);

			this.setState({ todos: [...todos] });
		}
	};

	render() {
		const { todos } = this.state;

		return (
			<div className="App">
				<Row>
					<Col offset={6} span={12}>
						<Header />
						<Form onCreateNewTodo={this.handleCreateNewTodo} />
						<ListTodo
							onMarkAsDone={this.handleMarkAsDone}
							onDelete={this.handleDelete}
							todos={todos}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}
