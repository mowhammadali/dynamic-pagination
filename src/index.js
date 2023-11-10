import React from 'react';
import ReactDom from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
      <App />
  </React.Fragment>
)