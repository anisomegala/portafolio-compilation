import React from  'react';
import './button.style.scss';




const Button = ({ children, inverted, ...others}) => (
    <button className={`${inverted ? 'inverted' :  ''} custom-button`} { ...others }>
        {children}
    </button>
);


export default Button;