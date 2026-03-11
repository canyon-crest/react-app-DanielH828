import {useState} from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Shop from './Shop.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'

function App() {
  const [page, setPage] = useState("Shop");
  return (
    <>
      <Nav setPage={setPage}/>
      {page === "Home" && <Home />}
      {page === "Shop" && <Shop />}
      <Footer />
    </>
  )
}

export default App
