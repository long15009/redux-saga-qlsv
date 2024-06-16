// src/index.js
import React from 'react'; // Import React để sử dụng JSX
import ReactDOM from 'react-dom'; // Import ReactDOM để render ứng dụng vào DOM
import './styles.css'; // Import file CSS
import App from './App'; // Import component App

// Render ứng dụng vào phần tử có id là root trong HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
