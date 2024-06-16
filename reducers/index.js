import { combineReducers } from 'redux'; // Import combineReducers để kết hợp nhiều reducer
import studentsReducer from './students';

const rootReducer = combineReducers({
  students: studentsReducer, //Reducer quản lý state sinh viên
});

export default rootReducer;
