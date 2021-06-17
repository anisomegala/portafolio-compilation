import React from 'react'; 
import { PortafolioItem } from '../portafolio/portafolio-item.component.jsx';
import './portafolioDirectory.style.scss';


class Directory extends React.Component {

constructor() {
    super();
    this.state = {
        portafolios: [
            {
                 title: 'Web Developer',
                 imgUrl: 'https://i.ibb.co/McwpzdF/Vamos-Latam-Colab-0224.jpg',
                 id: 1,
                 grid: 'gridItem1',
                 linkUrl: 'shop/hats'
               },
               {
                 title: 'Artist',
                 imgUrl: 'https://i.ibb.co/8d3mXYz/img-4.jpg',
                 id: 2,
                 grid: 'gridItem2',
                 linkUrl: 'shop/jackets'
               },
               { 
                 title: 'Social Media',
                 imgUrl: 'https://i.ibb.co/WHjfj6r/V7A1865.jpg',
                 id: 3,
                 grid: 'gridItem3',
                 linkUrl: 'shop/sneakers'
               },
               {
                 title: 'Model',
                 imgUrl: 'https://i.ibb.co/GtSKWcz/V7A5472.jpg',
                 size: 'large',
                 id: 4,
                 grid: 'gridItem4',
                 linkUrl: 'shop/womens'
               },
               {
                 title: 'Github',
                 imgUrl: 'https://i.ibb.co/h7bD6DF/V7A5489.jpg',
                 size: 'large',
                 id: 5,
                 grid: 'gridItem5',
                 linkUrl: 'shop/mens'
               },
               {
                 title: 'My Bio',
                 imgUrl: 'https://i.ibb.co/h7pQM5F/Vamos-Latam-Colab-0233.jpg',
                 size: 'large',
                 id: 6,
                 grid: 'gridItem6',
                 linkUrl: 'shop/mens'
               }
             
         ]

    }
}

render () {
return  <div className="portafolioDirectory">
            {
                this.state.portafolios.map(({title, imgUrl, id, grid}) => {
                    return  <PortafolioItem key= {id} title={title}  imgUrl={imgUrl} grid={grid}/>
                })
            }
        </div>

}

};

export default Directory;