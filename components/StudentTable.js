import React from 'react';
import { Table, Space, Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteStudentRequest } from '../actions';
import EditStudentModal from './EditStudentModal';

const StudentTable = ({ dataSource }) => {
  const dispatch = useDispatch();// Sử dụng hook useDispatch để lấy dispatch function từ Redux store
  const [editModalVisible, setEditModalVisible] = React.useState(false);// Trạng thái hiển thị modal sửa sinh viên
  const [editStudent, setEditStudent] = React.useState(null);// Lưu thông tin sinh viên cần sửa

  const handleEditStudent = (student) => {
    setEditStudent(student);//lưu thông tin sinh viên vào state
    setEditModalVisible(true);
  };

  const handleDeleteStudent = (student) => {
    Modal.confirm({
      title: 'Xác nhận',
      content: `Bạn có chắc chắn muốn xóa sinh viên "${student.name}" không?`,
      okText: 'Xóa',
      cancelText: 'Hủy',
      onOk() {
        dispatch(deleteStudentRequest(student.id));// Gửi action xóa sinh viên với ID sinh viên
      },
    });
  };

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ngày Sinh',
      dataIndex: 'dob',
      key: 'dob',
    },
    {
      title: 'Giới Tính',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditStudent(record)}>
            Sửa
          </Button>
          <Button type="danger" onClick={() => handleDeleteStudent(record)}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataSource} rowKey="id" />
      {editStudent && (
        <EditStudentModal
          visible={editModalVisible} 
          onCancel={() => setEditModalVisible(false)}
          student={editStudent}
        />
      )}
    </>
  );
};

export default StudentTable;
