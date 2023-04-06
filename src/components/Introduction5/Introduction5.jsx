import React, { useContext } from 'react';
import { RingContext } from '../Introduction/Introduction';

const Introduction5 = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h1>introduction4</h1>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Introduction5;