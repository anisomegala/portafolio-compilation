import React from 'react';
import { connect } from 'react-redux';
import { ToggleInfoHidden } from '../../redux/artistPageReducer/artistActions';




import './artist.grid.style.scss';


const GridMenu = ({ id, img, name, grid, head, ToggleInfoHidden }) => (
        grid.map(({ id, img, name, grid, head }, index ) => (
        <div
             className={`images ${grid}`} 
             key={ id } 
             style={{ backgroundImage: `url(${ img })`}}
             onClick={ ToggleInfoHidden }
             >

             <div className='grid-content'> 
                 <h1>{ head }</h1>
                 <h2 className='cards-title'>{name}</h2>   
             </div> 
             
        </div>
        ))
);

const MapDispatchToProps = dispatch => ({
    ToggleInfoHidden: () => dispatch(ToggleInfoHidden())
});

export default connect(null, MapDispatchToProps)(GridMenu);