import React from 'react';
import { Form, Input, Button, Select } from 'antd';
// lấy option từ components select
const { Option } = Select;

const StudentForm = ({ onSubmit, initialValues, onCancel }) => {
  const [form] = Form.useForm();
  // Thiết lập giá trị ban đầu cho form khi component được mount hoặc initialValues thay đổi
  React.useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  const handleOk = () => {
    form
      .validateFields() // Kiểm tra tính hợp lệ của các trường
      .then((values) => {
        onSubmit(values); // Gọi hàm onSubmit được truyền từ props
        form.resetFields(); // Reset form
      })
      .catch((error) => {
        console.log('Validation failed:', error); // Log lỗi nếu kiểm tra không hợp lệ
      });
  };

  return (
    <Form form={form} layout="vertical" initialValues={initialValues}>
      <Form.Item
        label="Tên Sinh Viên"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên sinh viên!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ngày Sinh (Ngày-Tháng-Năm)"
        name="dob"
        rules={[{ required: true, message: 'Vui lòng nhập ngày tháng năm sinh!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Giới Tính"
        name="gender"
        rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
      >
        <Select>
          <Option value="Nam">Nam</Option>
          <Option value="Nữ">Nữ</Option>
          <Option value="other">Khác</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Số Điện Thoại"
        name="phone"
        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleOk}>
          Submit
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: '10px' }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudentForm;
