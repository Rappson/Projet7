import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {tokenContext} from './components/connect-components/Header'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes as Switch, Link } from "react-router-dom";

/* reuse components */
import errorPage from './components/error';

/* pages */
import ConnectPage from './pages/ConnectPage'
import Homepage from './pages/homePage'
import OnePostPage from './pages/OnePost';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
        <Switch>
          <tokenContext.provider>
            <Route path='/' element={ConnectPage()} />

            <Route path='/homepage' element={Homepage()} />

            <Route path='post/:id' element={OnePostPage()} />

            <Route path='/error' element={errorPage()} />
          </tokenContext.provider>
        </Switch>
      </Router>


    </div>
  </React.StrictMode>,
  document.getElementById('root')
);