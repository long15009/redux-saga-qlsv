import React from 'react'; 
import { Button, Modal } from 'antd'; 
import StudentForm from './StudentForm'; 
import { useDispatch } from 'react-redux'; 
import { addStudentRequest } from '../actions'; 

const AddStudentButton = () => {
  const dispatch = useDispatch(); // Sử dụng hook useDispatch để lấy dispatch function từ Redux store
  const [visible, setVisible] = React.useState(false); // Khai báo state để quản lý trạng thái hiển thị của modal

 
  const handleOpenModal = () => {
    setVisible(true);
  };


  const handleCancel = () => {
    setVisible(false);
  };

 
  const handleSubmit = (values) => {
    dispatch(addStudentRequest(values)); // Gửi hành động thêm sinh viên với thông tin sinh viên là values
    setVisible(false); // Đóng modal sau khi submit
  };

  return (
    <>
      
      <Button type="primary" onClick={handleOpenModal}>
        Thêm Sinh Viên
      </Button>
      
      <Modal
        title="Thêm Sinh Viên"
        visible={visible} // Hiển thị modal nếu visible là true
        onCancel={handleCancel} // Đóng modal khi nhấn nút Cancel
        footer={null} // Không hiển thị footer của modal
      >
        
        <StudentForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </Modal>
    </>
  );
};

export default AddStudentButton;
