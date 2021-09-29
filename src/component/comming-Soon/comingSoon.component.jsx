import React from 'react';
import Typewriter from 'typewriter-effect';
import "./comingSoon.style.scss";

const ComingSoon = ({name}) => {
    const text1 = 'Comming Soon ';
    const text2 = ` ${name} Page`;
   return <div className='text'>
        <Typewriter 
        onInit={(typewriter) => {
            typewriter.typeString(text1)
            .pauseFor(1000)
            typewriter.typeString(text2)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
        />
    </div>
}


export default ComingSoon;