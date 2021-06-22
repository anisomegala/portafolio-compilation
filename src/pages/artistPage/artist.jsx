import React from 'react';
import ARTIST_DATA from './artistData.jsx';
// import Mymusic from '../../component/myMusic/mymusic.component.jsx';
// import  Header  from '../../component/header/header.component.jsx';


import './artist.style.scss'; 



class ArtistPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ARTIST_DATA,
            grid: [
                { img: 'https://i.ibb.co/D8mHFNp/img-1.jpg', id: 1, name: '', grid: 'card-2-1', head: 'Aniel Someillan'  },
                { img: 'https://i.ibb.co/n6Tg8MT/img-2.jpg', id: 2, name:  'My Music', grid: 'card-1-1'},
                { img: 'https://i.ibb.co/Qch7J8h/img-3.jpg', id: 3, name:  'My Proyects', grid: 'card-1-1'},
                { img: 'https://i.ibb.co/8d3mXYz/img-4.jpg', id: 4, name:  'My Videos', grid: 'card-2-1'},
                { img: 'https://i.ibb.co/s6JTzTm/img-5.jpg', id: 5, name:  'Gallery', grid: 'card-1-1'},
                { img: 'https://i.ibb.co/ZgcmcVs/img-6.jpg', id: 6, name:  'Contact', grid: 'card-1-1'}
            ],
            isHovered: {}
        };
        
    }

    handleMouseEnter = index => {
        this.setState(prevState => {
          return { isHovered: { ...prevState.isHovered, [index]: true } };
        });
      };
    
      handleMouseLeave = index => {
        this.setState(prevState => {
          return { isHovered: { ...prevState.isHovered, [index]: false } };
        });
      };

  

    render() {    
    return (  
         <div className='startContent'>
           {
               this.state.grid.map(({ id, img, name, grid, head }, index ) => (
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
    }
}    


export default ArtistPage;