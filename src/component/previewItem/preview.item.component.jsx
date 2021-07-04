import React from 'react';
import './preview.item.style.scss';
import Button  from '../custom-button/button.component';
import { connect } from 'react-redux';
import {addItem} from '../../redux/shoooping-cart/cart.action';


const PreviewCard = ({ item, currentUser, addItem }) => {
    const { name, imageUrl } = item;
  return <div className='Card-item'>
        <div className='img'
             style={{
                backgroundImage: `url(${imageUrl})`
             }}
        />
        <div className='footer-item'> 
            <span className='name'>{name}</span>  
        </div> 
        {
            !currentUser ? null : <Button inverted onClick={() => addItem(item) } > Add item to cart</Button> 

        } 
              
    </div>
};

const MapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const MapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(MapStateToProps, MapDispatchToProps)(PreviewCard);