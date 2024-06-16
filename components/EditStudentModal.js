import React from 'react'; 
import { Modal } from 'antd'; 
import StudentForm from './StudentForm'; 
import { useDispatch } from 'react-redux'; 
import { updateStudentRequest } from '../actions'; 

const EditStudentModal = ({ visible, onCancel, student }) => {
  const dispatch = useDispatch(); // Sử dụng hook useDispatch để lấy dispatch function từ Redux store

  
  const handleSubmit = (values) => {
    dispatch(updateStudentRequest({ ...student, ...values })); // Gửi action cập nhật sinh viên với thông tin mới
    onCancel(); 
  };

  return (
    <Modal
      visible={visible} 
      title="Sửa Sinh Viên"
      onCancel={onCancel} 
      footer={null} 
    >
      <StudentForm initialValues={student} onSubmit={handleSubmit} onCancel={onCancel} /> 
    </Modal>
  );
};

export default EditStudentModal;
