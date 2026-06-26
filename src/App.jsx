import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import BookingPage from './component/BookingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="*" element={<h1 className="text-2xl font-bold mt-30 text-center">Page Not Found</h1>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
