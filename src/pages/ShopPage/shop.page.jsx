import React from 'react';
import Header from '../../component/header/header.component';
import './shop.page.style.scss';
import { connect } from 'react-redux';




const ShopPage = () => {
  return <div className="SignIn-signOut-courses">
            <Header /> 
            <h1>here you buy</h1>
        </div>
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});



export default connect(mapStateToProps)(ShopPage);