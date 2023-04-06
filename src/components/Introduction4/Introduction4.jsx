import React, { useContext } from 'react';
import { MoneyContext } from '../Introduction/Introduction';

const Introduction4 = () => {
    const [money, setMoney] = useContext(MoneyContext) 
    return (
        <div>
            <h1>introduction4</h1>
            <p><small>introduction: {money}</small></p>
         <button onClick={()=>setMoney(money+1000)}>Send 1000tk</button>
        </div>
    );
};

export default Introduction4;