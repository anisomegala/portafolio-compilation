import React from 'react';
import './preview.item.style.scss';


const PreviewCard = ({ id, name, imageUrl }) => (
    <div className='Card-item'>
        <div className='img'
             style={{
                backgroundImage: `url(${imageUrl})`
             }}
        />
        <div className='footer-item'> 
            <span className='name'>{name}</span>  
        </div>         
        </div>
);


export default PreviewCard;