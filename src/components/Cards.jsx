import React from 'react'
import './Card.css'
import data from './CardData.js'
import panier from '../assets/icons/panier.png'


const Card = ({ id, img, price, title, addItemToCart, cartCounter }) => {
  return (
    <div className='card'>
      <img src={img} />
      <h4>{title}</h4>
      <p>{price}</p>
      <button onClick={() => addItemToCart(id) + cartCounter()}><p>Ajouter au pannier</p> <img src={panier} /></button>
    </div>
  )
}

const Cards = ({ addItemToCart, cartCounter }) => {

  return (
    <div className='card-list'>{
      data.map(item => (
        <Card
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          id={item.id}
          addItemToCart={addItemToCart}
          cartCounter={cartCounter}
        />
      ))
    }
    </div>
  )
}

export default Cards