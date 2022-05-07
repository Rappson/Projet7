import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes as Switch, Link } from "react-router-dom";

import { tokenContext } from './services/useToken';

import ConnectPage from '../pages/ConnectPage'
import Homepage from '../pages/homePage'
import OnePostPage from '../pages/OnePost'

const App = () => {

  const uniqueToken = localStorage.getItem('jwtToken');
  const [ tokenState, settokenState ] = useState(uniqueToken);

  useEffect(() => {
    localStorage.setItem('jwtToken', tokenState)
  }, [ tokenState ])

  return (
    <div>
      <tokenContext.Provider value={[ tokenState, settokenState ]}>
        <Router>
          <Switch>
            <Route path='/' element={ConnectPage()} />

            <Route path='/homepage' element={Homepage()} />

            <Route path='post/:id' element={OnePostPage()} />

            {/* {              <Route path='/error' element={errorPage()} /> */}
          </Switch>
        </Router>
      </tokenContext.Provider>
    </div>
  )
}

export default App;