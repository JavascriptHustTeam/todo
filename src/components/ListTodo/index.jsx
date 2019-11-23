import React, { PureComponent } from "react";
import { Button } from "antd";

export default class ListTodo extends PureComponent {
	render() {
		const { todos, onDelete, onMarkAsDone } = this.props;

		return todos.map(item => (
			<div key={item.id} style={styles.itemContainer}>
				<span style={styles.item(item)}>{item.value}</span>
				<div style={styles.action}>
					<Button
						type={item.done ? "dashed" : "primary"}
						onClick={() => onMarkAsDone(item)}
					>
						{item.done ? "Undone" : "Done"}
					</Button>
					<Button type="danger" onClick={() => onDelete(item)}>
						Delete
					</Button>
				</div>
			</div>
		));
	}
}

// style object
const styles = {
	// co the la propety
	itemContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		textAlign: "left",
		borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
		paddingTop: 20,
		paddingBottom: 20
	},
	// hoac function
	item: todo => ({
		width: "calc(100% - 165px)",
		textDecoration: todo.done === true ? "line-through" : "dashed"
	}),
	action: {
		width: 165,
		display: "flex",
		justifyContent: "space-around"
	}
};
