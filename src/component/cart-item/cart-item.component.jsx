import React from 'react';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import './cart-item.style.scss';
import { connect } from 'react-redux';
import  ToggleCartHidden  from '../../redux/shoooping-cart/cart.action';

const CartItem = ({ToggleCartHidden}) => {
    return  <div className='cart-icon' onClick={ToggleCartHidden}>

                <Icon className='shopping-icon'></Icon>
                <span className='item-count'>0</span>

            </div>
};

const MapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

export default connect(null, MapDispatchToProps)(CartItem);