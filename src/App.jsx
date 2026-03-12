import {useState} from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Shop from './Shop.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'

function App() {
  const [page, setPage] = useState("Home");
  return (
    <>
      <Nav setPage={setPage}/>
      {page === "Home" && <Home />}
      {page === "Shop" && <Shop myname="Abhinav's Jacket" description="Stolen from Abhinav's personal wardrobe (Gucci btw)." cost="500000"/>}
      {page === "Shop" && <Shop myname="Bryce's Glasses" description="Legally acquired Clasess from Bryce Brown." cost="25"/>}

      <Footer />
    </>
  )
}

export default App
