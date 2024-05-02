import React from 'react'
import { useState } from 'react';
import data from './CardData'
import { MdDelete } from "react-icons/md";
import './ShoppingCard.css'


const CardItem = (props, quantity) => {

    return (
        <div className='item-card'>
            <div className='item-info'>
                <img src={props.img} alt="" />
                <p>{props.title}</p>
                <p>{`${props.price} DA`}</p>
                <p> {`X ${quantity}`}</p>
            </div>
            <div>
                <button className='basket-btn'><MdDelete className='basket' /></button>
            </div>
        </div>
    )
};


const ShoppingCart = (items) => {
    function showCard() {
        var body = document.querySelector('.showme');
        body.classList.toggle('show-cart');
    }


    const itemIds = Array.isArray(items) ? items :  items.items.items;
    const filteredData = data.filter(item => itemIds.includes(item.id));


    return (
        <div className='shopping-card'>
            <h2>Shopping Card</h2>
            <div className='items-list'>{
                filteredData.map(item => (
                    <CardItem
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}/>
                )
                )
                }
            </div>
            <div className='card-btns'>
                <button className='check-btn'>Check Out</button>
                <button className='close-card-btn' onClick={showCard}>Close</button>
            </div>
        </div>
    )
}

export default ShoppingCart