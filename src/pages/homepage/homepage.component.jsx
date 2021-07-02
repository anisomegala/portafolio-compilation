import React from 'react';
import './homepage.style.scss';
import Directory  from '../../component/portafolioDirectory/portafolioDirectory.component';
import  { motion } from 'framer-motion';
import { PageVariantsHome } from '../../component/animations/animations.component';


const HomePage = () => (

    <motion.div 
        exit='out'
        animate='in'
        initial='out' 
        variants={PageVariantsHome}
        transition={{type: "spring", stiffness: 100}}
        className="homepage">
       <Directory />
    </motion.div>


);


export default HomePage;