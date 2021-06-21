import React from 'react';
import Resume from '../../component/resume-bio/resume.component.jsx';
import Timeline from '../../component/timelineBio/timeline.component.jsx';
import './bio.style.scss';


const Bio = () => (
<div className='bio-page'>
    <Resume />
    <Timeline />
</div>

);

export default Bio;