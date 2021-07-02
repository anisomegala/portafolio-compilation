import React from 'react';
import './cart-dropdown.style.scss';
import Button from '../custom-button/button.component';


const CartDropdown = () => (
    <div className='cart-dropdown'> 
        <div className='cart-items'>

        </div>
        <Button> Go to checkout </Button>
    </div>
);



export default CartDropdown;