import React from 'react'
import { useState } from 'react'
import '../component/carselection.css'
import './cart.css'
import Footer from '../component/reuseable/Footer'
import NavBars from '../component/reuseable/NavBars'

const CartPage = () => {
  const CartItems = localStorage.getItem('carts')
  const newData = JSON.parse(CartItems)


  const [cart, setCart] = useState(newData)

  const handleRemove = (title)=> {
    const arr = cart.filter((currentItems) => currentItems.title !== title);
    setCart(arr)

    localStorage.setItem('carts', JSON.stringify(arr))
  }

  return (
    <div>
      <NavBars />
            <div className='cart-head'>
                <h1>
                    Cart Page
                </h1>
          </div>


         <div className='sectionone-submain'>
         {cart.map((currentItems) => (
          <div key={currentItems.title} className="sectionone">
            <img
              src={currentItems.image}
              alt={`${currentItems.title}/ ${currentItems.class}`}
            />
            <span>
              <h1>{currentItems.title}</h1>
              <p>{currentItems.class}</p>
              <p>{currentItems.start_production}</p>
            </span>
            <button type="button" onClick={() => handleRemove(currentItems.title)}>
              remove item</button>
          </div>
        ))}
         </div>
         <Footer />
    </div>
  )
}

export default CartPage