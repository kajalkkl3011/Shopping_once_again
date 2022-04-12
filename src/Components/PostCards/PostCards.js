import React,{useContext} from 'react'
import Heart from '../../assets/Heart'
import {useHistory} from "react-router-dom";
import {PostContext} from "../../contextStore/PostContext";
import "./postcards.css"

function PostCards({product,index}) {
    let {setPostContent} = useContext(PostContext)//at the time of onClick on post ,the specified post item assigned to postContent by setPostContent function and it will be stored in a global context PostContext
 
    const history=useHistory()//at the time of onClick on post , we want redirect to the view post page

    const addToWishlist = (product) => {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const index = products.findIndex(pr => pr.id === product.id);
      if(index !== -1) {
        products.splice(index, 1);
      } else {
        products.push(product);
      }
      localStorage.setItem('products', JSON.stringify(products));
    }

    return (
      <div className="card" key={index} onClick={()=>{
        setPostContent(product);
        history.push("/view");
        // addToWishlist(product);
      }}>
        <div className="favorite">
          <Heart></Heart>
        </div>
        <div className="image">
          <img src={product.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {product.price}</p>
          <span className="category"> {product.category} </span>
          <p className="name"> {product.name}</p>
        </div>
        <div className="date">
          <span>{product.createdAt}</span>
        </div>
      </div>
       
    )
}

export default PostCards
