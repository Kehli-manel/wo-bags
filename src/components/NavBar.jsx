import React, { useState } from 'react'
import './NavBar.css'
import logo from '../assets/icons/logo.png'
import close from '../assets/icons/close.png'
import open from '../assets/icons/open.png'
import cart from '../assets/icons/carte-de-shopping.png'
import ShoppingCart from './ShoppingCart'
import './ShoppingCard.css'


const NavBar = (items, quantity) => {
    function showCard() {
        var body = document.querySelector('.showme');
        body.classList.toggle('show-cart');
    }
    function showMenu() {
        var body = document.querySelector('.mainbody');
        body.classList.toggle('show');
    }
    
    return (
        <>
            <div className='header mainbody'>
                <div className='header-part1'>
                    <a href="" className='logo'><img src={logo} alt="" className='logo-img' /> Wo!Bags</a>
                    <ul className='navbar'>
                        <button className='close-btn' onClick={showMenu}><img src={close} alt="" className='close' /></button>
                        <li><a href="">Accueil</a></li>
                        <li className='dropdown-btn'><a href="">Produits</a>
                            <ul className='dropdown-list'>
                                <li><a href="">Toujour</a></li>
                                <li><a href="">Voyage</a></li>
                                <li><a href="">Etudes</a></li>
                                <li><a href="">Travail</a></li>
                                <li><a href="">Soirées</a></li>
                            </ul>
                        </li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className='btns'>
                    <div><button className='cart-btn' onClick={showCard}><img src={cart} alt="" className='shopping-cart' />
                    <div className='cart-qnt'></div>
                    </button></div>
                    <button className='open-btn' onClick={showMenu}><img src={open} alt="" className='open' /></button></div>
            </div>
            <div className='showme'>
                <ShoppingCart items={items} quantity={quantity}/>
            </div>
        </>
    )
}

export default NavBar