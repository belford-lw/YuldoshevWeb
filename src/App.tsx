import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./shared/Navbar"
import Courses from "./pages/Courses"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App