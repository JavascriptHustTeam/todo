import React from "react";
import { Form, Icon, Input, Button } from "antd";

class InputForm extends React.PureComponent {
	handleSubmit = e => {
		const { form, onCreateNewTodo } = this.props;

		e.preventDefault();
		form.validateFields((err, values) => {
			if (!err) {
				onCreateNewTodo(values.value);
			}
		});
	};

	render() {
		const { form } = this.props;
		const { getFieldDecorator, getFieldValue } = form;

		return (
			<Form layout="inline" onSubmit={this.handleSubmit}>
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
						disabled={!getFieldValue("value")}
					>
						Submit
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default Form.create({ name: "horizontal_login" })(InputForm);
