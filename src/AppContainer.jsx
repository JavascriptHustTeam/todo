import React, { PureComponent } from "react";
import { Row, Col } from "antd";

import { Header, Form, ListTodo } from "components";

export default class AppContainer extends PureComponent {
	// data trong state
	state = {
		todos: [{ id: 1, value: "Implement Authentication", done: false }]
	};

	handleCreateNewTodo = value => {
		// object destructing es6 => tim hieu roi trinh bay vai cau ve no nhe
		const { todos } = this.state;

		// lay ra todo moi nhat trong array
		const lastTodo = todos[0];

		// tao 1 todo moi, neu chua co todo nao trong array, tao todo moi voi id = 1, neu co tao todo voi id = id cua todo moi nhat + 1
		const newTodo = { id: lastTodo ? lastTodo.id + 1 : 1, value, done: false };
		// them mot phan tu vao dau mang
		todos.unshift(newTodo);

		// set lai state. Cu phap [...todos] o day co nghia la tao ra 1 array moi va copy toan bo phan tu cua array cu vao day
		this.setState({ todos: [...todos] });
	};

	handleMarkAsDone = todo => {
		const { todos } = this.state;

		// tim vi tri dau tien cua phan to todo trong array. Neu tim thay, tra ve index cua no trong array, neu khong tra ve -1
		const index = todos.indexOf(todo);
		if (index !== -1) {
			// neu no da done roi thi undnone no
			if (todos[index].done === true) todos[index].done = false;
			// nguoc lai
			else todos[index].done = true;

			this.setState({ todos: [...todos] });
		}
	};

	handleDelete = todo => {
		const { todos } = this.state;

		const index = todos.indexOf(todo);
		if (index !== -1) {
			// xoa phan tu ra khoi array tai vi tri index va xoa 1 phan tu
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
