import React from 'react';
import './coursespage.style.scss';
import SingIn from '../../component/signIn/signIn.component';
import PreviewCourse  from '../../component/courses-preview/previewCourse.component';
import PREVIEW_DATA from './preview-course.data';
import Header from '../../component/header/header.component.jsx';
import { auth, creatUser } from '../../firebase/firebase'
import SignUp from '../../component/sign-Up/signUp.component';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';

class CoursesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coursesPriview: PREVIEW_DATA,
           
        }
    }
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if (userAuth) {
                const userRef = await creatUser(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                    });
                });
            } 
            setCurrentUser(userAuth);
        })
      }

      componentWillUnmount() {
        this.unsubscribeFromAuth();
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

        <div className="signIn-signUp"> 
            <SingIn />
            <SignUp/>
        </div>
        
    </div>
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(null, mapDispatchToProps)(CoursesPage);