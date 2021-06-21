import React from 'react';
import { withRouter } from 'react-router-dom';

import './portafolio-item.style.scss';



const PortafolioItem = ({title, id, grid, imgUrl, history, linkUrl, match }) => {
        
      return <div className={`portafolio-item ${grid}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
};

export default withRouter(PortafolioItem);