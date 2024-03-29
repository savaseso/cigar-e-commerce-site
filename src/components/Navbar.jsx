import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button'
import styled from 'styled-components'
import logo from '../logo.svg'

const Navbar = () => {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbark-dark px-sm-5">
                <Link to='/'><img src={logo} alt="store" className='navbar-brand'/></Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className='nav-link'>Cohiba Toronto</Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                   <ButtonContainer>
                       <span className='mr-2'>
                           <i className="fas fa-cart-plus"></i>
                        </span>
                        My Cart
                    </ButtonContainer> 
                </Link>
            </NavWrapper>
        )
    }

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.4rem;
    text-transform:capitalize;
}
`

export default Navbar