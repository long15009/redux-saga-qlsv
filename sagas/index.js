import { all, takeLatest, call, put } from 'redux-saga/effects'; // Import các hàm từ redux-saga
import {
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE,
} from '../actions'; // Import các hằng số action

// Hàm giả lập gọi API để thêm sinh viên
const apiAddStudent = (student) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newStudent = { ...student, id: Date.now() }; // Thêm ID giả lập cho sinh viên mới
      resolve(newStudent);
    }, 1000); // Giả lập độ trễ của API 1 giây
  });
};

// Hàm giả lập gọi API để cập nhật sinh viên
const apiUpdateStudent = (student) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(student); // Trả về thông tin sinh viên đã được cập nhật
    }, 1000); // Giả lập độ trễ của API 1 giây
  });
};

// Hàm giả lập gọi API để xóa sinh viên
const apiDeleteStudent = (studentId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(studentId); // Trả về ID của sinh viên đã bị xóa
    }, 1000); // Giả lập độ trễ của API 1 giây
  });
};

// Saga xử lý thêm sinh viên
function* addStudent(action) {
  try {
    const newStudent = yield call(apiAddStudent, action.payload); // Gọi hàm API để thêm sinh viên
    yield put({ type: ADD_STUDENT_SUCCESS, payload: newStudent }); // Gửi hành động thêm sinh viên thành công
  } catch (error) {
    yield put({ type: ADD_STUDENT_FAILURE, error: error.message }); // Gửi hành động thêm sinh viên thất bại nếu có lỗi
  }
}

// Saga xử lý cập nhật sinh viên
function* updateStudent(action) {
  try {
    const updatedStudent = yield call(apiUpdateStudent, action.payload); // Gọi hàm API để cập nhật sinh viên
    yield put({ type: UPDATE_STUDENT_SUCCESS, payload: updatedStudent }); // Gửi hành động cập nhật sinh viên thành công
  } catch (error) {
    yield put({ type: UPDATE_STUDENT_FAILURE, error: error.message }); // Gửi hành động cập nhật sinh viên thất bại nếu có lỗi
  }
}

// Saga xử lý xóa sinh viên
function* deleteStudent(action) {
  try {
    yield call(apiDeleteStudent, action.payload); // Gọi hàm API để xóa sinh viên
    yield put({ type: DELETE_STUDENT_SUCCESS, payload: action.payload }); // Gửi hành động xóa sinh viên thành công
  } catch (error) {
    yield put({ type: DELETE_STUDENT_FAILURE, error: error.message }); // Gửi hành động xóa sinh viên thất bại nếu có lỗi
  }
}

// Watcher Saga lắng nghe các action thêm sinh viên
function* watchAddStudent() {
  yield takeLatest(ADD_STUDENT_REQUEST, addStudent); // Gọi saga addStudent khi nhận được action ADD_STUDENT_REQUEST
}

// Watcher Saga lắng nghe các action cập nhật sinh viên
function* watchUpdateStudent() {
  yield takeLatest(UPDATE_STUDENT_REQUEST, updateStudent); // Gọi saga updateStudent khi nhận được action UPDATE_STUDENT_REQUEST
}

// Watcher Saga lắng nghe các action xóa sinh viên
function* watchDeleteStudent() {
  yield takeLatest(DELETE_STUDENT_REQUEST, deleteStudent); // Gọi saga deleteStudent khi nhận được action DELETE_STUDENT_REQUEST
}

// Saga tổng hợp
export default function* rootSaga() {
  yield all([
    watchAddStudent(), // Kích hoạt watcher saga lắng nghe hành động thêm sinh viên
    watchUpdateStudent(), // Kích hoạt watcher saga lắng nghe hành động cập nhật sinh viên
    watchDeleteStudent(), // Kích hoạt watcher saga lắng nghe hành động xóa sinh viên
  ]);
}
