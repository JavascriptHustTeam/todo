import React from "react";
import { Button } from "antd";

const ItemTodo = ({ item, onDelete, onMarkAsDone }) => {
	return (
		<div>
			<span>{item.value}</span>
			<div>
				<Button
					type="primary"
					onClick={() => onMarkAsDone(item)}
				>
					Done
				</Button>
				<Button
					type="danger"
					onClick={() => onDelete(item)}
				>
					Delete
				</Button>
			</div>
		</div>
	);
};

export default ItemTodo;
