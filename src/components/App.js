import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from './globalStyle'
import Header from './Header'
import Movies from './Movies'
import Seats from './Seats'
import Sections from './Sections'
import Success from './Success'

export default function App() {

  const [allInfo, setAllInfo] = useState()

  return (
    <BrowserRouter>
    <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessoes/:idFilme" element={<Sections allInfo={allInfo} setAllInfo={setAllInfo} />} />
        <Route path="/assentos/:idSessao" element={<Seats allInfo={allInfo} setAllInfo={setAllInfo} />} />
        <Route path="/sucesso" element={<Success allInfo={allInfo} setAllInfo={setAllInfo} />} />
      </Routes>
    </BrowserRouter>
  )
}
