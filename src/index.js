import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';

/* components */
import Header from './connect-components/Header.js';
import Welcome from './connect-components/Welcome.js';
import SignIn from './connect-components/sign.js'
import Footer from './connect-components/Footer.js'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <Welcome />
      <SignIn />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);