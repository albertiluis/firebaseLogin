import React, { useState } from 'react'
import{ BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'

function App() {

  const [ user, setUser ] = useState(null)

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }

    setUser(newUser)

  }

  if(user === null){
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} />
    )
  }

  return (
    <BrowserRouter>
      <Header user={user} />

      <Routes />

      <Footer />
    </BrowserRouter>
  )

}

export default App;