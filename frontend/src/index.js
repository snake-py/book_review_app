import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import auth from './helper/auth';
import './css/app.scss';

const loadAuthApp = (token) => {
  console.log(token.data.token.token);
  localStorage.setItem('auth-token', token.data.token.token);
  window.location = `${process.env.REACT_APP_BASE_URL}/`;
};

ReactDOM.render(
  <React.StrictMode>
    <App loadAuthApp={loadAuthApp} />
  </React.StrictMode>,
  document.getElementById('root')
);
