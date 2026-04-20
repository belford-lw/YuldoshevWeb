import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./shared/Navbar"

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App