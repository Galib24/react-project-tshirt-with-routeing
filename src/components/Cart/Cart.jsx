import React from 'react';
import TShirt from '../TShirt/TShirt';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>order summery: {cart.length} </h2>
            {
                cart.map(TShirt => <p key={TShirt._id}
                >{TShirt.name}
                    <button onClick={()=>handleRemoveFromCart(TShirt._id)} 
                    >
                        X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;