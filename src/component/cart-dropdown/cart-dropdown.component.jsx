import React from 'react';
import './cart-dropdown.style.scss';
import Button from '../custom-button/button.component';
import CartAddedItems from '../cart-added-Items/cartAddedItems.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/shoooping-cart/cartSelectors/cart.selector';


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'> 
        <div className='cart-items'>
          {
              cartItems.map(cartItem => <CartAddedItems key={cartItems.id} item={cartItem}/>)
          }  
        </div>
        <Button> Go to checkout </Button>
    </div>
);

const MapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});
export default connect(MapStateToProps)(CartDropdown);