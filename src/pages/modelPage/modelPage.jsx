import React from 'react';
import ComingSoon from '../../component/comming-Soon/comingSoon.component';
import CloseIconPage from '../../component/closeIcon/closeIcon.component';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectDirectoryPortafolios } from '../../redux/directory/directory.selector';

import './modelPage.style.scss';



const ModelPage = () => {
    const name = ' Model'
   return  <div className='main'>
        <div className='Section-1'> 
          <CloseIconPage />
          <ComingSoon name={name}/> 
        </div> 
    </div>
};






export default ModelPage;