import React from 'react';




import './artist.grid.style.scss';


const GridMenu = ({ grid, onClick }) => {

       return (grid.map(({ id, img, name, grid, head, popup }) => (
        <div
             className={`images ${grid}`} 
             key={ id } 
             style={{ backgroundImage: `url(${ img })`}}
             onClick={() => onClick(id)}
             > 
             <div className='grid-content'> 
                 <h1>{ head }</h1>
                 <h2 className='cards-title'>{name}</h2>   
             </div> 
        </div>
       
        ))
    )};


export default GridMenu;