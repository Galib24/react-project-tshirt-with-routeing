import React, { useContext } from 'react';
import { RingContext } from '../Introduction/Introduction';

const SpecialIntroduction = ({ring}) => {
   const angti = useContext(RingContext)
   
    return (
        <div>
            <h2>special</h2>
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default SpecialIntroduction;