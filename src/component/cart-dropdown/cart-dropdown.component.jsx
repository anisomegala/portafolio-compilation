import React from 'react';
import './cart-dropdown.style.scss';
import Button from '../custom-button/button.component';
import CartAddedItems from '../cart-added-Items/cartAddedItems.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/shoooping-cart/cartSelectors/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'> 
        <div className='cart-items'>
          {
              cartItems.map(cartItem => <CartAddedItems key={cartItem.id} item={cartItem}/>)
          }  
        </div>
        <Button> Go to checkout </Button>
    </div>
);

const MapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default connect(MapStateToProps)(CartDropdown);