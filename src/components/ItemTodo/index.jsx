import React from "react";
import { Button } from "antd";

const ItemTodo = ({ item, onDelete, onMarkAsDone }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				textAlign: "left",
				borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
				paddingTop: 20,
				paddingBottom: 20
			}}
		>
			<span
				style={{
					width: "calc(100% - 165px)",
					textDecoration: item.done === true ? "line-through" : "dashed"
				}}
			>
				{item.value}
			</span>
			<div
				style={{ width: 165, display: "flex", justifyContent: "space-around" }}
			>
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
	);
};

export default ItemTodo;
