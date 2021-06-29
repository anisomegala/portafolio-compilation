import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo/aniel.svg'; 
import { auth } from '../../firebase/firebase';
import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
import userEvent from '@testing-library/user-event';


const Header = ({ currentUser }) => (
    <div className='header'>
            <Link className='link' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='link' to='/'> Portafolios </Link>
                <Link className='link' to='/Shop'> Shop</Link>
                {
                    currentUser ? 
                    <div className='link' onClick={() => auth.signOut()}> Sign Out</div>
                    :
                    <HashLink className='link' to='#signIn' 
                                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end'})}
                    >Sign In</HashLink>
                }
                
            </div>        
    </div>
);
 
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);