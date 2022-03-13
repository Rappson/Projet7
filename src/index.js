import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes as Switch, Link } from "react-router-dom";

/* reuse components */
import errorPage from './components/error';

/* pages */
import connectPage from './pages/ConnectPage'
import Homepage from './pages/homePage'
import onePost from './components/onePost/onepost'



ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
        <Switch>
          <Route path='/' element={connectPage()} />

          <Route path='/homepage' element={Homepage()} />

          <Route path='/post/:id' element={onePost()}/>

          <Route path='/error' element={errorPage()} />
        </Switch>
      </Router>


    </div>
  </React.StrictMode>,
  document.getElementById('root')
);