import React from  'react';
import './button.style.scss';



const Button = ({ children, ...others}) => (
    <button className='custom-button' { ...others }>
        {children}
    </button>
);


export default Button;