import React from 'react';
//import ReactDOM from 'react-dom/client'; //"react-dom"
import './index.css';
import App from './App';
import store from './redux/store';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)