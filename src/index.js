import React from 'react';
import ReactDOM from 'react-dom';
import RootProvider from './providers/root.provider';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
     {/* provider wrapper for the app */}
    <RootProvider>
      {/* router wrapper for the app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
