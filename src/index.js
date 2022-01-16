import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes as Switch, Link } from "react-router-dom";

/* connection components */
import Header from './connect-components/Header.js';
import Welcome from './connect-components/Welcome.js';
import SignIn from './connect-components/sign.js';
import Footer from './connect-components/Footer.js';

/* reuse components */
import errorPage from './components/error';

function connectPage() {
  return (
    <div>
      <Welcome />
      <SignIn />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />

      <Router>
        <Switch>
          <Route path='/' element={connectPage()} />

          <Route path='/error' element={errorPage()} />
        </Switch>
      </Router>


    </div>
  </React.StrictMode>,
  document.getElementById('root')
);