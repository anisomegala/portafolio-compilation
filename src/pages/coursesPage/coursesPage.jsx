import React from 'react';
import './coursespage.style.scss';
import SingIn from '../../component/signIn/signIn.component';
import PreviewCourse  from '../../component/courses-preview/previewCourse.component';
import PREVIEW_DATA from './preview-course.data';
import Header from '../../component/header/header.component.jsx';


class CoursesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coursesPriview: PREVIEW_DATA
        }
    }
render() {
    const { coursesPriview } = this.state;
    return <div className="SignIn-signOut-courses">
        <Header />
        <div className='heading-courses'>
            <h1>My Shop</h1>  
        </div>
        {
        coursesPriview.map(({id, ...otherProps}) => (
        <PreviewCourse key={ id } {...otherProps} />
         ))   
        }
        <SingIn />
    </div>
    }
}



export default CoursesPage;