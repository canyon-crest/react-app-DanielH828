import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Counter from './Counter.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App />
    <Counter descriptionCounter='Use this counter to pass the time when you are bored :p'/>
    <Card myname='apples' description='But this apple!' cost='1'/>
    <Footer />
  </StrictMode>,
)
