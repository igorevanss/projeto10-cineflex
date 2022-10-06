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
        <Route path="/sessoes" element={<Sections />} />
        <Route path="/assentos" element={<Seats />} />
        <Route path="/sussesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}
