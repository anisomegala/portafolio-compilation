import React from 'react';
import { Switch, Route } from 'react-router-dom';

import  HomePage from './pages/homepage/homepage.component.jsx';
import ArtistPage from './pages/artistPage/artist.jsx';
import Bio from './pages/bioPage/bio.jsx';
import CoursesPage from './pages/coursesPage/coursesPage.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import WebDeveloper from './pages/webdev_Page/wedDevPage';
import ModelPage from './pages/modelPage/modelPage';

import { connect } from 'react-redux';
// import ShopPage from './pages/ShopPage/shop.page';
import { AnimatePresence } from "framer-motion";

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelector/selectUser';




import './App.css';


class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path='/' component={ HomePage} />
            <Route  exact path='/anielsomeillan/web-developper' component={ WebDeveloper } />
            <Route  exact path='/anielsomeillan/artist' component={ ArtistPage } />
            <Route  exact path='/anielsomeillan/bio' component={ Bio } />
            <Route  exact path='/anielsomeillan/model' component={ ModelPage } />
            <Route  exact path='/anielsomeillan/my-courses' component={ CoursesPage} />
            <Route  exact path='/checkout' component={ CheckoutPage} />
          </Switch>
        </AnimatePresence>  
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});



export default connect(mapStateToProps)(App);
