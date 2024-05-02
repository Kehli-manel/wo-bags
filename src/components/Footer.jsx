import React from 'react'
import './Footer.css'
import logo from '../assets/icons/logo.png'
import fb from '../assets/icons/facebook.png'
import insta from '../assets/icons/instagram.png'

const Footer = () => {
    return (
        
        <footer>
            <div className='footer-border-r'><a href="" className='logo'><img src={logo} className='logo-img' />Wo!Bags</a></div>
            <div className='footer-border-r'>
                <a href=""><b>Produits</b></a>
                <div className='nav'>
                    <a href="">Toujour</a>
                    <a href="">Voyage</a>
                    <a href="">Etudes</a>
                    <a href="">Travail</a>
                    <a href="">Soirées</a>
                </div>
            </div>
            <div className='contact-info'>
            <div className='contact-icons'>
                <a href=""><img src={fb} alt="" /></a>
                <a href=""><img src={insta} alt="" /></a>
            </div>
            <p>Site créer par <b>KEHLI Manel</b> - 2024</p>
            </div>
        </footer>
        
    )
}

export default Footer