import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './style.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="https://www.facebook.com/fabiosmorinigo" target='_blank' rel="noreferrer"><FacebookIcon className='social' color='primary' /></a>
      <a href="https://twitter.com/fabiosmorinigo" target='_blank' rel="noreferrer"><TwitterIcon className='social twitter' /></a>
      <a href="https://www.instagram.com/fabiosmorinigo/" target='_blank' rel="noreferrer"> <InstagramIcon className='social instagram' /></a>
      <a href="https://www.linkedin.com/in/fabiosmorinigo/" target='_blank' rel="noreferrer"> <LinkedInIcon className='social' color='primary' /></a>
      <a href="https://wa.link/o1d8s8" target='_blank' rel="noreferrer"><WhatsAppIcon className='social whatsapp' /></a>
      </footer>
  )
}

export { Footer }