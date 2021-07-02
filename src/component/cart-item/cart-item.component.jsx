import React from 'react';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import './cart-item.style.scss';

const CartItem = () => {
    return  <div className='cart-icon'>

                <Icon className='shopping-icon'></Icon>
                <span className='item-count'>0</span>

            </div>
};



export default CartItem;