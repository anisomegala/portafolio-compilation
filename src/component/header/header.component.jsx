import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo/aniel.svg'; 


const Header = () => (
    <div className='header'>
            <Link className='link' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='link' to='/'> Portafolios </Link>
                <Link className='link' to='/'> Sign Up </Link>
            </div>        
    </div>
);


export default Header;