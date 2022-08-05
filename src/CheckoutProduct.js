 import React from 'react'
 import './CheckoutProduct.css'
 import {useStateValue} from './StateProvider'
 
 function CheckoutProduct({ image, title, price, rating }) {
  const [{basket}, dispatch] = useStateValue();


  const removeFromBasket = () =>{
    //remove item from bakset
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      title: title,
    })
  }
   return (
     <div className='Checkout_Product'>
       
     <img className='checkoutProduct_image' src={image} 
     />
     <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>
            {title}
        </p>
        <p className='checkoutProduct_price'>
            <small>$</small>
            <strong>{price} </strong>
        </p>
        <div className='checkoutProduct_rating'>
          {Array(rating)
          .fill()
          .map(() => (
            <p>🌟</p>
          ) )}

        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
     </div>
     
     
     
     </div   >
   )
 }
 
 export default CheckoutProduct