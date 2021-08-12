import React, { useState } from 'react';
import  './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleProduct = (product) => {
        console.log('product added', product)
        const newCart = [...cart, product];
             setCart(newCart)
    }


    return (
        <div className="shopContainer">
               <div className="productContainer">
               
                    {
                        products.map(pd =>
                            <Product product={pd}
                            handleProduct={handleProduct}
                            showAddToCart={true}
                            ></Product>)
                    }
              

               </div>



                <div className="cartContainer">
                    <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Shop;