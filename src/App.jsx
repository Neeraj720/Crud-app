import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from './Component/UserHome'
import UserForm from './Component/UserForm'
import Update from './Component/Update'
import View from './Component/View'

function App() {
  return (
  <Routes>
    <Route path='/' element={<UserHome />} />
    <Route path='/userForm' element = {<UserForm />} />
    <Route path='/edit/:id' element = {<Update />} />
    <Route path='/view/:id' element = {<View />} />
  </Routes>
  )
}

export default App
