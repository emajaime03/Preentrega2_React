import React from 'react'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a TecnoHub"} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
