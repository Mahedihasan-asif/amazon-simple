import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    console.log(props)
    const {img,name,seller,price,key} = props.product;
    const handleProduct = props.handleProduct;
    
    return (
        <div className="product">
           <div>
           <img src={img} alt=""/>
           </div>
           <div>
           <h4><Link to={"/product/"+key}>{name}</Link></h4>
    <p>by: {seller}</p>
    <h5>${price}</h5>
    {props.showAddToCart && <button className="makeButton"
    onClick={()=>handleProduct(props.product)} 
    ><FontAwesomeIcon icon={faShoppingCart}
    /> add to cart</button>}
           </div>
        </div>
    );
};

export default Product;