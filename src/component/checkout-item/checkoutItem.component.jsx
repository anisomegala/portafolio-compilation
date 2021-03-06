import React from 'react';
import './checkoutItem.style.scss';
import { connect } from 'react-redux';
import { clearFromCart, addItem, removeItem} from '../../redux/shoooping-cart/cart.action';



const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem  }) => {
const { name, imageUrl, price, quantity } = cartItem;
return  <div className='checkout-item'> 
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'> {name} </span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem) }> &#10094;</div>
             <span className='value'>{quantity} </span>
             <div className='arrow' onClick={() => addItem(cartItem) }> &#10095;</div> 
        </span>
        <span className='price'> {price} </span>
        <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
    </div>}
;

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);