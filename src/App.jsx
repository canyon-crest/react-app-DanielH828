import {useState} from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Shop from './Shop.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'


function App() {
  const [page, setPage] = useState("Home");
  return (
    <>
      <Nav setPage={setPage}/>
      {page === "Home" && <Home />}
      {page === "Shop" && <Shop myname="Abhinav's Jacket" description="Stolen from Abhinav's personal wardrobe (Gucci btw)." cost="500000"/>}
      {page === "Shop" && <Shop myname="Bryce's Glasses" description="Legally acquired Clasess from Bryce Brown. -___-     " cost="25"/>}
      {page === "Shop" && <Shop myname="Shogo's laptop" description="Acquired via the legal system (He forgot to pay his taxes)" cost="809"/>}
      {page === "Contact" && <Contact />}
      <Footer />
    </>
  )
}

export default App

