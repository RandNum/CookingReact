import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from "./serviceWorker";
//import registerServiceWorker from 'react-service-worker'; //testing older versions of service worker reporting which is now replaced by webvitals

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//webvitals now replaces the older serviceWorkers
//serviceWorker.unregister();
//registerServiceWorker.unregister();