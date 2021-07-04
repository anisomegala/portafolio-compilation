import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo/aniel.svg'; 
import { auth } from '../../firebase/firebase';
import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';
import CartItem from '../cart-item/cart-item.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';





const Header = ({ currentUser, hidden }) => (
    <div className='header'>
            <Link className='link' to='/'>
                <Logo
                className='logo'></Logo>
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
                {
                    !currentUser ? null : <CartItem />
                }
                
            </div> 
            {
                currentUser 
                ? hidden ? null : <CartDropdown /> 
                :
                null
            }         
    </div>
);
 
const mapStateToProps = ({user: {currentUser}, cart: {hidden}} ) => ({
    currentUser,
    hidden
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);