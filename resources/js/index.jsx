import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './Context';
//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();
const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<Router history={history}>
  <AuthProvider>
    <App />
  </AuthProvider>

</Router>,);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
