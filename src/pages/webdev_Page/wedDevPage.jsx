import React, {useState, useEffect} from 'react';
import CloseIconPage from '../../component/closeIcon/closeIcon.component';
import ComingSoon from '../../component/comming-Soon/comingSoon.component';



import "./webDevPage.style.scss";

const WebDeveloper = () => {
  const name = 'Web Developer'
  
  return ( 
    <div className='main'>
        <CloseIconPage />
        <ComingSoon name={name}/>
    </div>)
};

  

export default WebDeveloper;