import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let total = 0
  props.orders.forEach(el => total += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='total'>Total: {new Intl.NumberFormat().format(total)}£</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Your trolley is empty!</h2>
  </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)


  return (
   <header>
    <div>
        <span className='logo'>HOME IDENTITY</span>
        <ul className='nav'>
          <li>About Us</li>
          <li>Contact</li>
          <li>Adress</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-cart'> 
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
          </div>
        )}  
    </div>
    <div className='preview'></div>
   </header>
  )
}
