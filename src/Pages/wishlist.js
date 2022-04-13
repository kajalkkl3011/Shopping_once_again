import React from 'react'


function wishList(props) {
    return (
        <div className='main-div'>
            <div className='main-wrapper'>
                <div className='header-wrapper'>
                <i className="fa fa-heart-o wishlist-icon" aria-hidden="true"></i>
                <h1>My Wishlist</h1>
                </div>
                <div className='table-wrapper'>
                    <table className='wishlist-table'>
                        <thead>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            <td>
                                <div className="wishlist-item">
                                    
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                            <img src="https://rukminim2.flixcart.com/image/332/398/kwqq1zk0/sari/o/c/w/free-coco-m-maroon-shop-lady-unstitched-original-imag9csmf8ac4xza.jpeg?q=50" alt="" className='wishlist-img'/>
                            <h3>Patola Saree</h3>
                                </div>
                            </td>
                            <td>
                                <p>$300</p>
                            </td>
                            <td>
                                <p>Saree</p>
                            </td>
                            <td>
                                <p>Available</p>
                            </td>
                        </tbody>
                        <tbody>
                        <td>
                                <div className="wishlist-item">
                                    
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                            <img src="https://rukminim2.flixcart.com/image/332/398/kwqq1zk0/sari/o/c/w/free-coco-m-maroon-shop-lady-unstitched-original-imag9csmf8ac4xza.jpeg?q=50" alt="" className='wishlist-img'/>
                            <h3>Patola Saree</h3>
                                </div>
                            </td>
                            <td>
                                <p>$300</p>
                            </td>
                            <td>
                                <p>Saree</p>
                            </td>
                            <td>
                                <p>Available</p>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default wishList
