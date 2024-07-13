import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/landing/Navbar"
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route element={<Home/>} path="/"/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
