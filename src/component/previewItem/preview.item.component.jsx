import React from 'react';
import './preview.item.style.scss';
import Button  from '../custom-button/button.component';
import { connect } from 'react-redux';


const PreviewCard = ({ id, name, imageUrl, currentUser }) => (
    <div className='Card-item'>
        <div className='img'
             style={{
                backgroundImage: `url(${imageUrl})`
             }}
        />
        <div className='footer-item'> 
            <span className='name'>{name}</span>  
        </div> 
        {
            !currentUser ? null : <Button inverted> Add item to cart</Button> 

        } 
              
    </div>
);

const MapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(MapStateToProps)(PreviewCard);