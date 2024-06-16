import {
  ADD_STUDENT_SUCCESS,
  UPDATE_STUDENT_SUCCESS,
  DELETE_STUDENT_SUCCESS,
} from '../actions';

const initialState = {
  students: [
    {
      id: 1,
      name: 'Vũ Hoàng Long',
      dob: '15-09-2002',
      gender: 'Nam',
      phone: '123456789',
    }
  ],
};
// Reducer quản lý state sinh viên
const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT_SUCCESS: // Xử lý hành động thêm sinh viên thành công
      return {
        ...state, // Giữ nguyên các phần khác của state
        students: [...state.students, action.payload], // Thêm sinh viên mới vào danh sách
      };
    case UPDATE_STUDENT_SUCCESS: // Xử lý hành động cập nhật sinh viên thành công
      return {
        ...state, // Giữ nguyên các phần khác của state
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student // Cập nhật thông tin sinh viên
        ),
      };
    case DELETE_STUDENT_SUCCESS: // Xử lý hành động xóa sinh viên thành công
      return {
        ...state, // Giữ nguyên các phần khác của state
        students: state.students.filter(
          (student) => student.id !== action.payload // Xóa sinh viên khỏi danh sách
        ),
      };
    default: // Trả về state hiện tại nếu không khớp với bất kỳ action nào
      return state;
  }
};


export default studentsReducer;
