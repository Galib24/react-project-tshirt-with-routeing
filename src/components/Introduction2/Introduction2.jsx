import React, { useContext } from 'react';
import { MoneyContext } from '../Introduction/Introduction';

const Introduction2 = () => {
    const [money] =useContext(MoneyContext)
    return (
        <div>
             <h1>introduction2</h1>
             <p><small>introduction money: {money}</small></p>
        </div>
    );
};

export default Introduction2;