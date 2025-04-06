import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import "modern-css-reset"
import './App.scss'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element={ <NavigationBar/> }>
          <Route index element={ <Home/> } />
        </Route>
      </Routes>
    </>
  )
}

export default App