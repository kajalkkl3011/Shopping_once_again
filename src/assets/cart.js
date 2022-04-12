import React from 'react'
import { Link } from 'react-router-dom'

export default  function Cart() {
    return(  
        <Link to="/wishlist" class="cart-text">Wishlist <i class="fa fa-shopping-cart"></i></Link>    
      )
}