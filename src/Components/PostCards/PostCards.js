import React, { useContext, useState } from "react";
import Heart from "../../assets/Heart";
import { useHistory } from "react-router-dom";
import { PostContext } from "../../contextStore/PostContext";
import "./postcards.css";

function PostCards({ product, index }) {
  let { setPostContent } = useContext(PostContext); //at the time of onClick on post ,the specified post item assigned to postContent by setPostContent function and it will be stored in a global context PostContext
  const [wishListItem, setWishListItem] = useState(JSON.parse(localStorage.getItem("wishlistItem")) || [])
  const history = useHistory(); //at the time of onClick on post , we want redirect to the view post page

  const addToWishlist = (product) => {
    const wishlistItem = [...wishListItem];
    const index = wishlistItem.findIndex((pr) => pr.id === product.id);
    if (index !== -1) {
      wishlistItem.splice(index, 1);
    } else {
      wishlistItem.push(product);
    }
    localStorage.setItem("wishlistItem", JSON.stringify(wishlistItem));
    setWishListItem(wishlistItem);
  };

  const getWishListColor =() =>{
    // const wishlistItem = JSON.parse(localStorage.getItem("wishlistItem")) || [];
    const index = wishListItem.findIndex((pr) => pr.id === product.id);
    return index > -1 ? "red": "black"
  }

  return (
    <div className="card" key={index}>
      <div className="favorite" onClick={() => addToWishlist(product)}>
        <Heart color={getWishListColor()}></Heart>
      </div>
      <div
        onClick={() => {
          setPostContent(product);
          history.push("/view");
          // addToWishlist(product);
        }}
      >
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
    </div>
  );
}

export default PostCards;
