import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import Layout from "./pages/Layout";
import { Series } from './pages/Series'
import { Films } from './pages/Films'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="films" element={<Films />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
