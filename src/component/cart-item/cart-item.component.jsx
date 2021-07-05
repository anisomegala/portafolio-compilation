import React from 'react';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import './cart-item.style.scss';
import { connect } from 'react-redux';
import  {ToggleCartHidden}  from '../../redux/shoooping-cart/cart.action';
import { selectIconCount } from '../../redux/shoooping-cart/cartSelectors/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartItem = ({ToggleCartHidden, iconCounter}) => {
    return  <div className='cart-icon' onClick={ToggleCartHidden}>

                <Icon className='shopping-icon'></Icon>
                <span className='item-count'> { iconCounter } </span>

            </div>
};

const MapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

const MapStateToProps = createStructuredSelector({
    iconCounter: selectIconCount
})

export default connect(MapStateToProps, MapDispatchToProps)(CartItem);