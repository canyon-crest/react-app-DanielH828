import Card from './Card.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Card.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Card myname='Apple' description='It is an apple' cost='1'/>
      <Card myname='RAM' description='Overpriced RAM' cost='559'/> 
      <Card myname='Abhinav' description='Image of Abhinav' cost='50' />
    </StrictMode>,
  )
  