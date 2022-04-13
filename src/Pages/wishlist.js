import React, {useState} from "react";

const  WishList = (props)=> {
  const [wishListItem, setWishListItem] = useState(
    JSON.parse(localStorage.getItem("wishlistItem")) || []
  );

  const removeProductFromWishlist=(index)=>{
      let updatedWishList = [...wishListItem];
      updatedWishList.splice(index,1);
      setWishListItem(updatedWishList)
      localStorage.setItem("wishlistItem", JSON.stringify(updatedWishList));
  }

  const renderRows = () => {
      return wishListItem.map((item, index)=>{
          return (
            <tr>
            <td>
              <div className="wishlist-item">
                
                <h3>{item.name}</h3>
              </div>
            </td>
            <td>
            <img
                  src={item.url}
                  alt=""
                  className="wishlist-img"
                />
            </td>
            <td>
              <p>{item.price}</p>
            </td>
            <td>
              <p>{item.category}</p>
            </td>
            <td>
              <p>Available</p>
            </td>
            <td>
            <i className="fa fa-trash-o" aria-hidden="true" onClick={()=>removeProductFromWishlist(index)}></i>
            </td>
          </tr>
          )
      })
  };

  return (
    <div className="main-div">
      <div className="main-wrapper">
        <div className="header-wrapper">
          <i className="fa fa-heart-o wishlist-icon" aria-hidden="true"></i>
          <h1>My Wishlist</h1>
        </div>
        <div className="table-wrapper">
          <table className="wishlist-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WishList;
