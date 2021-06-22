import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  HomePage from './pages/homepage/homepage.component.jsx';
import ArtistPage from './pages/artistPage/artist.jsx';
import Bio from './pages/bioPage/bio.jsx';
import CoursesPage from './pages/coursesPage/coursesPage.jsx';


import './App.css';


const WebDeveloper = () => (
  <div>
    <h1> Web Developer page</h1>
  </div>
);



function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ HomePage} />
          <Route  exact path='/anielsomeillan/web-developper' component={ WebDeveloper } />
          <Route  exact path='/anielsomeillan/artist' component={ ArtistPage } />
          <Route  exact path='/anielsomeillan/bio' component={ Bio } />
          <Route  exact path='/anielsomeillan/my-courses' component={ CoursesPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
