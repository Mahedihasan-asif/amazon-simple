import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice =( cart.reduce((total,pd) => total+pd.price,0));

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
              total = total + product.price;
        
    }

    let shipping = 0;
    if(total > 35){
        shipping=0;
    }
    else if(total > 15){
        shipping=4.99;
    }
    else if(total > 0){
        shipping=5.99;
    }
    const tax = (total/10);
   
    return (
        <div>
            <h4>Order summery: </h4>
    <p>Items ordered: {cart.length}</p>
    <p><small>ShippingCost: {shipping}</small></p>
    <p>Product Price : {total}</p>
    <p>Vat : {tax}</p>
    <p>Total Price : {total + shipping+ tax}</p>

    <Link to="/review"><button className="makeButton">
        Review
    </button></Link>
        </div>
    );
};

export default Cart;