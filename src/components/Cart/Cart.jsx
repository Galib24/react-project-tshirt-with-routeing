import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please added some products</p>
    }
    else {
        message = <div>
            <h3>Happy customer</h3>
            <p><small>Thanks for select products</small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue': 'red'}>order summery: {cart.length} </h2>
           <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>NOOOOOOOOOO</p>
           
            {
                cart.length > 2
                    ? <span className='purple'>Pride customer</span>
                    : <span>If like u can cart again</span>
            }
            {message}
            {
                cart.map(TShirt => <p key={TShirt._id}
                >{TShirt.name}
                    <button onClick={() => handleRemoveFromCart(TShirt._id)}
                    >
                        X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>great!!!!!</p>
            }
            {
                cart.length === 3 || <h3>not got three!!!</h3>
            }
        </div>
    );
};

export default Cart;


// conditional rendering
// 1) use if else to set variable that will contain an element,components or div
// 2) ternary: condition ? 'for true : 'false'
// 3) Logical &&: (if the conditional is true then the next thing will be displayed)
// 4) logical || ( if the condition is false then the next thing will be displayed)
/**
 * Conditional css class
 * 1) use ternary 
 * 2) ternary inside template string
 * **/ 