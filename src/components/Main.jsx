import React from 'react'
import './Main.css'
import Cards from './Cards.jsx'
import search from "../assets/icons/search.png"
import mylogo from "../assets/icons/wo!bags.png"



const Main = ({ addItemToCart, cartCounter }) => {


    return (
        <div className='main'>
            <div className='filtre'>
                <h3>Filtrer</h3>
                <button>Prix croissant</button>
                <button>Prix decroissant</button>
                <button>Hommes</button>
                <button>Femmes</button>
                <button>Enfants</button>
                <button>Voyage</button>
            </div>
            <div className='shopping-part'>
                <div className='search'>
                    <img src={mylogo} className='mylogo' />
                    <input type="text" />
                    <button type='submit'><img src={search} /></button>
                </div>
                <div className='shopping-list'>
                    <Cards addItemToCart={addItemToCart} cartCounter={cartCounter}/>
                </div>
            </div>
        </div>
    )
}

export default Main