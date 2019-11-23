import React from "react";
import { Form, Icon, Input, Button } from "antd";

const InputForm = ({ form, onCreateNewTodo, submitting }) => {
	const { getFieldDecorator, validateFields, getFieldValue } = form;

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				onCreateNewTodo(values.value);
			}
		});
	};

	return (
		<Form layout="inline" onSubmit={handleSubmit}>
			<Form.Item>
				{getFieldDecorator("value", {
					rules: [{ required: true, message: "Please input something!" }]
				})(
					<Input
						prefix={
							<Icon type="schedule" style={{ color: "rgba(0,0,0,.25)" }} />
						}
						placeholder="value"
					/>
				)}
			</Form.Item>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					disabled={!getFieldValue("value") || submitting}
					loading={submitting}
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Form.create({ name: "horizontal_login" })(InputForm);
