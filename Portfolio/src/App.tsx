import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning" element={<Learning/>} />
        <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </>
  )
}

export default App
