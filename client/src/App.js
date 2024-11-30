import "./App.css"

import  { BrowserRouter, Routes, Route } from "react-router-dom"
import ComplitionPage from "./components/ComplitonPage"
import Home from "./components/Home"
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<ComplitionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
