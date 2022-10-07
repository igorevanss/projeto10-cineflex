import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from './globalStyle'
import Header from './Header'
import Movies from './Movies'
import Seats from './Seats'
import Sections from './Sections'
import Success from './Success'

export default function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessoes/:idFilme" element={<Sections />} />
        <Route path="/assentos/:idSessao" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}
