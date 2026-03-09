import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'
import Nav from './Nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card myname='Apple' description='It is an apple' cost='1'/>
    <Card myname='RAM' description='Overpriced RAM' cost='559'/> 
    <Card myname='Abhinav' description='Image of Abhinav' cost='50' />
    <App />
  </StrictMode>,
)
