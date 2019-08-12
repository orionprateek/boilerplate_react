import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import Login from './client/components/loginPage/loginPage.jsx'

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Login} />
    </div>
  </HashRouter>
  , document.getElementById('app'))
