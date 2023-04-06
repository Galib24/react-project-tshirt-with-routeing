import React from 'react';
import OwnIntroduction from '../own Introduction/OwnIntroduction';
import Introduction4 from '../Introduction4/Introduction4';
import Introduction5 from '../Introduction5/Introduction5';

const Introduction1 = ({ring}) => {
    return (
        <div>
            <h1>introduction1</h1>
           
           <section className='flex'>
           <OwnIntroduction ring={ring}></OwnIntroduction>
            <Introduction4></Introduction4>
            <Introduction5></Introduction5>

           </section>

        </div>
    );
};

export default Introduction1;