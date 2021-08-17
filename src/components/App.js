import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import {createTheme, ThemeProvider} from '@material-ui/core'
import Login from './Login'
// import {blue,#DE4831} from '@material-ui/core/colors'

import { AuthProvider } from '../context/AuthContext'
import Chats from './Chats'

const theme=createTheme({
  palette: {
    google: {
      // light: '#34364d',
      main: '#de4831',
      // dark: '#002884',
      // contrastText: '#fff',
    },
    facebook: {
     // light: '#ff7961',
      main: '#005EF6',
      // dark: '#ba000d',
      // contrastText: '#000',
    },
  },
})
function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
          <Route path="/chats" component={Chats} />
        <Route path="/" component={Login} />   
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
