import React, { useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Notfound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

export const App = () => {
  const {isAuth} = useContext(Context)
  return (
    <div>
    <GlobalStyle />
    <Logo />
    <Router>
      <Notfound default />
      <Home path='/' />
      <Home path='/pet/:categoryId' />
      <Detail path='/detail/:detailId' />
      {!isAuth && <NotRegisteredUser path='/login' />}
      {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
      {!isAuth && <Redirect noThrow from='/user' to='/login' />}
      {isAuth && <Redirect noThrow from='/login' to='/' />}
      <Favs path='/favs' />
      <User path='/user' />
    </Router>
    <NavBar />
  </div>
  )
}
