import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from './globalStyle'
import Header from './Header'
import Movies from './Movies'

export default function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        {/* <Route path="" element={<Sections />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
