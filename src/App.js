import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import  HomePage from './pages/homepage/homepage.component.jsx';
import ArtistPage from './pages/artistPage/artist.jsx';
import Bio from './pages/bioPage/bio.jsx';
import CoursesPage from './pages/coursesPage/coursesPage.jsx';
import { connect } from 'react-redux';
import ShopPage from './pages/ShopPage/shop.page';
import { motion, AnimatePresence } from "framer-motion"




import './App.css';



const WebDeveloper = () => (
  <div>
    <h1> Web Developer page</h1>
  </div>
);



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // currentUser: null
    }
  }

  // unsubscribeFromAuth = null

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
  //     this.setState({ currentUser: user });

  //     console.log(this.user);
  //   })
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div className='app'>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path='/' component={ HomePage} />
            <Route  exact path='/anielsomeillan/web-developper' component={ WebDeveloper } />
            <Route  exact path='/anielsomeillan/artist' component={ ArtistPage } />
            <Route  exact path='/anielsomeillan/bio' component={ Bio } />
            <Route  exact path='/anielsomeillan/shop'  render={() => ( !this.props.currentUser) ? (<Redirect to='/anielsomeillan/my-courses'/>) : (<ShopPage/>) } />
            <Route  exact path='/anielsomeillan/my-courses' render={() => this.props.currentUser ? (<Redirect to='/anielsomeillan/shop'/>) : (<CoursesPage/>) } />
          </Switch>
        </AnimatePresence>  
      </div>
    );
  }
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});



export default connect(mapStateToProps)(App);
