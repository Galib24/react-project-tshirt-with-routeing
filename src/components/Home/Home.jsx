import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const tShirts = useLoaderData();
    // console.log(tShirts);
    const [cart, setCart] = useState();
    
const handleAddToCart =tShirt =>{
    console.log(tShirt);
}



    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    >

                    </TShirt>)
                }
                 </div>

                <div className='cart-container'>
                    <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;