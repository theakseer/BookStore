import React, { useEffect } from 'react'
import {Routes, Route } from 'react-router-dom'
import EditBook from './pages/EditBook'
import CreateBook from './pages/CreateBook'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'


const App = () => {

    return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book/create' element={<CreateBook/>}/>
      <Route path='/book/details/:id' element={<ShowBook/>}/>
      <Route path='/book/edit/:id' element={<EditBook/>}/>
      <Route path='/book/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App