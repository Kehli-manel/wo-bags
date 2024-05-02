import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {

  const [items, setItems] = useState([]);
  const [quantity, setQuantity]= useState(1);

  const addItemToCart = (id) => {
    setItems( prevItems =>[...prevItems, id]);
    setQuantity(prevQuantity => prevQuantity + 1);
  };
 

  const[counter, setCounter]= useState(1)
  const cartCounter = () =>{
    setCounter(counter => counter+1)
    console.log(counter)
    document.querySelector('.cart-qnt').innerHTML=counter;
  }
  return (
    <div>
      <NavBar items={items} quantity={quantity}/>
      <Main addItemToCart={addItemToCart} items={items} cartCounter={cartCounter} />
      <Footer />
    </div>
  )
}

export default App
