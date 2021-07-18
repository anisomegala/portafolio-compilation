import React from 'react';
import './coursespage.style.scss';
import SingIn from '../../component/signIn/signIn.component';
import CoursesPriview from '../../component/courses-overview/courses-overview.component';
import CategoryPage from '../category/category.component';
import {Route} from 'react-router-dom';
import Header from '../../component/header/header.component.jsx';
import { auth, creatUser } from '../../firebase/firebase'
import SignUp from '../../component/sign-Up/signUp.component';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';
import { motion } from 'framer-motion';
import { PageVariants, PageTransitions } from '../../component/animations/animations.component';


class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
    const { currentUser } = this.props;
    console.log(this.props.match.path   );
    return <motion.div
            exit='out'
            animate='in'
            initial='out'
            variants={PageVariants}
            transition={ PageTransitions }
            className="SignIn-signOut-courses">
        <Header />
        <div className='heading-courses'>
            <h1>My Shop</h1>  
        </div>
        <Route exact path={`${this.props.match.path}`} component={CoursesPriview} /> 
        <Route path={`${this.props.match.path}/:collectionId`} component={CategoryPage} /> 
        {
            currentUser ? null :  <div className="signIn-signUp"> 
                <SingIn />
                <SignUp/>
            </div>
        }   
    </motion.div>
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)) 
  });

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);