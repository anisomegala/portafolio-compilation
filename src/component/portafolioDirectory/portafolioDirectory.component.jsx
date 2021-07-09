import React from 'react'; 
import { connect } from 'react-redux';
import  PortafolioItem  from '../portafolio/portafolio-item.component.jsx';
// import { useTransition, animated } from 'react-spring';
import './portafolioDirectory.style.scss';
import  { createStructuredSelector} from 'reselect';
import { selectDirectoryPortafolios } from '../../redux/directory/directory.selector';


const Directory = ({ portafolios }) => (
  <div className="portafolioDirectory">
    {portafolios.map(({id, ...othersProps}) => (
        <PortafolioItem key= {id} {...othersProps}/>
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  portafolios: selectDirectoryPortafolios
});

export default connect(mapStateToProps)(Directory);