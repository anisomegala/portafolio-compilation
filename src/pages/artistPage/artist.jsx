import React from 'react';
import  { createStructuredSelector} from 'reselect';
import { selectGridArtist } from '../../redux/artistPageReducer/artistSelector';
import { connect } from 'react-redux';
import CloseIconPage from '../../component/closeIcon/closeIcon.component';
// import Mymusic from '../../component/myMusic/mymusic.component.jsx';
// import  Header  from '../../component/header/header.component.jsx';


import './artist.style.scss'; 



const ArtistPage = ({ id, img, name, grid, head }) => (
       <div className='startContent'>
           <CloseIconPage /> 
           {
               grid.map(({ id, img, name, grid, head }, index ) => (
               <div
                    className={`images ${grid}`} 
                    key={ id } 
                    style={{ backgroundImage: `url(${ img })`}}
                    >

                    <div className='grid-content'> 
                        <h1>{ head}</h1>
                        <h2 className='cards-title'>{name}</h2>   
                    </div> 
                    
               </div>
               ))
           }  
        </div>
)   

const mapStateToProps = createStructuredSelector({
  grid: selectGridArtist
})

export default connect(mapStateToProps)(ArtistPage);