import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Acceuil from './Acceuil'
import Contact from './Contact'
import Eror from './Eror'
import Menu from './Menu'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Menu />
      <Routes>
        <Route path='/' element={<Acceuil />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Eror />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
