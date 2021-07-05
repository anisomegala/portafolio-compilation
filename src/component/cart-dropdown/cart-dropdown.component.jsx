import React from 'react';
import './cart-dropdown.style.scss';
import Button from '../custom-button/button.component';
import CartAddedItems from '../cart-added-Items/cartAddedItems.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/shoooping-cart/cartSelectors/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { ToggleCartHidden } from '../../redux/shoooping-cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'> 
        <div className='cart-items'>
          {
              cartItems.length ? 
              cartItems.map(cartItem => <CartAddedItems key={cartItem.id} item={cartItem}/>)
              :
              <span className='empty-message'>No items Added</span>
          }  
        </div>
        <Button onClick={
            cartItems.length ? 
            () => {history.push('/checkout'); dispatch(ToggleCartHidden())}
            :
            null
            } > Go to checkout </Button>
    </div>
);

const MapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(MapStateToProps)(CartDropdown));