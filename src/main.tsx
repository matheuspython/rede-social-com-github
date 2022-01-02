import React from 'react'
import ReactDOM from 'react-dom'
import Globals from './global/styles'
import { Rotas } from './Routes'
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <Globals />
      <Router>
        <Rotas />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
