import React from "react";
import { List } from "antd";
import ItemTodo from "components/ItemTodo";

const ListTodo = ({ todos, onDelete, onMarkAsDone }) => {
	return (
		<List
			size="large"
			dataSource={todos}
			renderItem={item => (
				<ItemTodo item={item} onDelete={onDelete} onMarkAsDone={onMarkAsDone} />
			)}
		/>
	);
};

export default ListTodo;
