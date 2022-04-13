import React from 'react'
import { Link } from 'react-router-dom'

export default  function Cart() {
    return(  
        <Link to="/wishlist" className="cart-text">Wishlist <i className="fa fa-shopping-cart"></i></Link>    
      )
}