import React, {Component} from 'react';
// import  { createStructuredSelector} from 'reselect';
// import { selectGridArtist } from '../../redux/artistPageReducer/artistSelector';
// import { connect } from 'react-redux';
import CloseIconPage from '../../component/closeIcon/closeIcon.component';
import GridMenu from '../../component/artist-grid/artist.grid.component';
import MyComponent from '../../component/myComponents/My.componets';
// import YoutubeEmbed from '../../component/youtubeEmbed/youtubeEmbed.component';


import './artist.style.scss'; 



class ArtistPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        grid: [
            { img: 'https://i.ibb.co/D8mHFNp/img-1.jpg', id: 1, name: '', grid: 'card-2-1', popup: 'popup', head: 'Aniel Someillan'  },
            { img: 'https://i.ibb.co/n6Tg8MT/img-2.jpg', id: 2, name:  'My Music', grid: 'card-1-1', popup: 'popup'},
            { img: 'https://i.ibb.co/Qch7J8h/img-3.jpg', id: 3, name:  'My Proyects', grid: 'card-1-1', popup: 'popup'},
            { img: 'https://i.ibb.co/8d3mXYz/img-4.jpg', id: 4, name:  'My Videos', grid: 'card-2-1', popup: 'popup'},
            { img: 'https://i.ibb.co/s6JTzTm/img-5.jpg', id: 5, name:  'Gallery', grid: 'card-1-1', popup: 'popup'},
            { img: 'https://i.ibb.co/ZgcmcVs/img-6.jpg', id: 6, name:  'Contact', grid: 'card-1-1', popup: 'popup'}
        ],
        selectedGrid: null,

      };
  };

  onGridSelect(boxId) {
    this.setState({ selectedGrid: boxId});
    console.log(`Box was seleted ${boxId}`)
  }


  render() {
    return (
      <div className='startContent'>
        <CloseIconPage /> 
        <GridMenu grid={ this.state.grid } onClick={(boxId) => this.onGridSelect(boxId)} />
        <MyComponent selectedGrid={ this.state.grid.filter((box) => box.id === this.state.selectedGrid)[0]}/>
      </div>  
       
      
    )
  }


}

export default ArtistPage;