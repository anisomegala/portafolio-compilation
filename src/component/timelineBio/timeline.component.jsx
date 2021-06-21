import React from 'react';
import './timeline.style.scss';
import timelineData from './timeline-data.jsx';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 



const Timeline = () => (
    <div className='timeline'>
        <VerticalTimeline>
           {
               timelineData.map(el => {
                   return (
                     <VerticalTimelineElement
                        key={el.id}
                        date={el.date}
                        dateClassName='date'
                        contentStyle={{ background: 'rgba(156, 100, 19, 0.7)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(156, 100, 19)' }}
                        iconStyle={{ background: '#521c1c', color: '#fff' }}   
                     >
                         <h3 className='vertical-timeline-element-title'>{el.title}</h3>
                         <h5 className='vertical-timeline-element-title'>{el.location}</h5>
                         <p className='vertical-timeline-element-title'>{el.description}</p>

                     </VerticalTimelineElement>  
                   );
               })
           } 
        </VerticalTimeline>
    </div>
);
export default Timeline;