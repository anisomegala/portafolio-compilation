import React from 'react';
import {connect} from 'react-redux';
import './courses-overview.style.scss';
import { createStructuredSelector } from 'reselect';
import  PreviewCourse from '../courses-preview/previewCourse.component';
import { selectCollections } from '../../redux/shopReducer/shop.selector';
import { motion } from 'framer-motion';



const CoursesPriview = ({collections}) => (
    <motion.div 
    
        className='courses-overview'>
        {
        collections.map(({id, ...otherProps}) => (
        <PreviewCourse key={ id } {...otherProps} />
         ))}
    </motion.div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});


export default connect(mapStateToProps)(CoursesPriview);