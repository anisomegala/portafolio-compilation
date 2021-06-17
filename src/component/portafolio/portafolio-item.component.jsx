import React from 'react';

import './portafolio-item.style.scss';

export const PortafolioItem = ({title, id, grid, imgUrl}) => (
    <div className={`portafolio-item ${grid}`}>
        <div 
            className="background" 
            style={{ 
                backgroundImage: `Url(${imgUrl})` 
                }} 
            />
            <div className="content-item">
                <h1>{ title }</h1>
            </div>
    </div>    
    
);