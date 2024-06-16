// Định nghĩa các hằng số cho các loại action
export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST'; // Hành động yêu cầu thêm sinh viên
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS'; // Hành động thêm sinh viên thành công
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE'; // Hành động thêm sinh viên thất bại

export const UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST'; // Hành động yêu cầu cập nhật sinh viên
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS'; // Hành động cập nhật sinh viên thành công
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE'; // Hành động cập nhật sinh viên thất bại

export const DELETE_STUDENT_REQUEST = 'DELETE_STUDENT_REQUEST'; // Hành động yêu cầu xóa sinh viên
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS'; // Hành động xóa sinh viên thành công
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE'; // Hành động xóa sinh viên thất bại

// Action creators cho việc thêm sinh viên, tạo ra một action object khi gọi hàm này
export const addStudentRequest = (student) => ({
  type: ADD_STUDENT_REQUEST, // Loại hành động
  payload: student, // Dữ liệu đính kèm theo hành động, ở đây là thông tin sinh viên
});

// Action creators cho việc cập nhật sinh viên, tương tự như trên
export const updateStudentRequest = (student) => ({
  type: UPDATE_STUDENT_REQUEST, // Loại hành động
  payload: student, // Dữ liệu đính kèm theo hành động, ở đây là thông tin sinh viên cần cập nhật
});

// Action creators cho việc xóa sinh viên, tương tự như trên
export const deleteStudentRequest = (studentId) => ({
  type: DELETE_STUDENT_REQUEST, // Loại hành động
  payload: studentId, // Dữ liệu đính kèm theo hành động, ở đây là ID của sinh viên cần xóa
});
