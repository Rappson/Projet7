import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';

/* components */
import Header from './connect-components/Header';
import Welcome from './connect-components/Welcome';
import SignIn from './connect-components/sign'
import Footer from './connect-components/Footer'

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