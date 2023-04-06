import React, { createContext, useState } from 'react';
import Introduction1 from '../Introduction1/Introduction1';
import Introduction2 from '../Introduction2/Introduction2';
import Introduction3 from '../Introduction3/Introduction3';
import './Introduction.css'
import Introduction4 from '../Introduction4/Introduction4';
export  const RingContext = createContext('gold');
export const MoneyContext = createContext(0)

const Introduction = () => {
    const ring = 'diamond'
    const [money,setMoney] = useState(0)

    return (
        <div className='introduction'>
            <h1>introduction</h1>
            <p>has context: {money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
            <RingContext.Provider value='golden ring'>
                <section className='flex'>
                    <Introduction1 ring={ring}></Introduction1>
                    <Introduction2></Introduction2>
                    <Introduction3></Introduction3>
                    
                </section>
            </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Introduction;

/*
1) create a context and export
2) create a provider and pass a value
3) use useContext to receive 

*/ 