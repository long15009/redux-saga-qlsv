import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import AddStudentButton from './components/AddStudentButton';
import StudentTable from './components/StudentTable';
import './styles.css';

const AppContent = () => {
  const students = useSelector((state) => state.students.students);
  return (
    <div className="App">
      <h1>Quản Lý Sinh Viên</h1>
      <AddStudentButton />
      <StudentTable dataSource={students} />
    </div>
  );
};
// Component App, bọc AppContent bằng Provider để cung cấp store
const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
