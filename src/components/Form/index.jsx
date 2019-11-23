import React from "react";
import { Form, Icon, Input, Button } from "antd";

class InputForm extends React.PureComponent {
	handleSubmit = e => {
		const { form, onCreateNewTodo } = this.props;

		e.preventDefault();
		// error la nhung loi cua input neu no khong thoa man cac rules trong getFieldDecorator
		// values la object gom cac id cua getFieldDecorator
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
			// Form nay la component cua ant-design da cung cap, minh chi viec dung lai ma khong phai build lai tu dau
			// layout inline se xap xep casc Form.Item cua no them 1 dong
			<Form layout="inline" onSubmit={this.handleSubmit}>
				<Form.Item>
					{/* getFieldDecorator Two-way binding for form, giong nhu trong Angular, chung ta co two-way-data-binding. Lat nua ban e se co mot bai trinh bay ve ant desing de giai thich them ve may cai nhu the nay */}
					{/* ham nay co 2 tham so truyen vao: getFieldDecorator(id, options). id la id cua input element, cung se duoc gan gia tri cua input, options la 1 object gom cac rules (validation schema) va nhieu options khac nhu normalize, preserve, ...  */}
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
