import React from 'react';
import { connect } from 'react-redux';
import { ToggleInfo } from '../../redux/artistPageReducer/artistActions';
import  { createStructuredSelector} from 'reselect';
import { selectArtistInfoHidden } from '../../redux/artistPageReducer/artistSelector';



import './artist.grid.style.scss';


const GridMenu = ({ id, img, name, grid, head, ToggleInfoHidden, hidden}) => (
        grid.map(({ id, img, name, grid, head }) => (
        <div
             className={`images ${grid}`} 
             key={ id } 
             style={{ backgroundImage: `url(${ img })`}}
             onClick={() => ToggleInfoHidden(id)}
             >

             <div className='grid-content'> 
                 <h1>{ head }</h1>
                 <h2 className='cards-title'>{name}</h2>   
             </div> 
            {
                hidden ?
                 null
                :
                <div>
                    aniel someillan distpach
                </div>
            }
        </div>
        ))
);

const MapDispatchToProps = dispatch => ({
    ToggleInfoHidden: (item) => dispatch(ToggleInfo(item))
});

const mapStateToProps = createStructuredSelector({
    hidden: selectArtistInfoHidden
  })

export default connect(mapStateToProps, MapDispatchToProps)(GridMenu);