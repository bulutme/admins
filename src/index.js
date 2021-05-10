import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './contexts/AuthContext';
import ThemeProvider from './contexts/ThemeContext';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();