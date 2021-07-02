import React from 'react';
import Resume from '../../component/resume-bio/resume.component.jsx';
import Timeline from '../../component/timelineBio/timeline.component.jsx';
import './bio.style.scss';
import { motion } from 'framer-motion';
import { PageVariants, PageTransitions } from '../../component/animations/animations.component';

const Bio = () => (
<motion.div
 exit='out'
 animate='in'
 initial='out'
 variants={ PageVariants }  
 transition={ PageTransitions }
 className='bio-page'>
    <Resume />
    <Timeline />
</motion.div>

);

export default Bio;