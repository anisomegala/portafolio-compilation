import React from 'react';
import './previewCourse.style.scss';
import PreviewCard from '../previewItem/preview.item.component';



const  PreviewCourse = ( { title, items }) => (
 <div className='preview-courses'>
     <h2 className='title'>{ title }</h2>
     <div className='preview'>
        {
            items.filter((item, index) => (index < 4)).map((item) => (
                <PreviewCard key= { item.id } item={item} />
            ))
        }
     </div>

 </div>
)



export default PreviewCourse;