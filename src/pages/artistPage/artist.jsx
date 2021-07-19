import React from 'react';
import  { createStructuredSelector} from 'reselect';
import { selectGridArtist } from '../../redux/artistPageReducer/artistSelector';
import { connect } from 'react-redux';
import CloseIconPage from '../../component/closeIcon/closeIcon.component';
import GridMenu from '../../component/artist-grid/artist.grid.component';


import './artist.style.scss'; 



const ArtistPage = ({id, ...grid }) => (
       <div className='startContent'>
           <CloseIconPage /> 
           <GridMenu key={ id } {...grid}/>
        </div>
)   

const mapStateToProps = createStructuredSelector({
  grid: selectGridArtist
})

export default connect(mapStateToProps)(ArtistPage);