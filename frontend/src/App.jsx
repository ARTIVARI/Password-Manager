import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Dashbord from './component/Dashboard/Dashbord'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashbord/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
