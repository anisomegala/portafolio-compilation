import React from 'react';
import './cart-dropdown.style.scss';
import Button from '../custom-button/button.component';
import CartAddedItems from '../cart-added-Items/cartAddedItems.component';
import { connect } from 'react-redux';


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

const MapStateToProps = ({ cart: {cartItems}}) => ({
    cartItems
})
export default connect(MapStateToProps)(CartDropdown);