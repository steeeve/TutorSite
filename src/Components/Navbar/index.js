import React from 'react'
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: ß0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @ media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

const MobileIcon = styled.div`
    display: none;
    font-size: 2.2rem;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
        transform: translate(-100%, 60%)
        cursor: pointer;
        color: #fff;
        padding: 0px;
    }
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: nonel
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none
    }
`

const NavItem = styled.li`
    height: 80px;
`

const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom:3px solit #0BF71
    }
`

const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavBtnLink = styled (LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.8s ease-in-out;
        background: #fff;
        color: #010606;
    }
`


const Navbar = ({toggle}) => {
    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>SC Tutoring</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to = 'about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = 'discover'>Discover</NavLinks>
                    </NavItem>
                     <NavItem>
                        <NavLinks to = 'services'>Services</NavLinks>
                    </NavItem>
                     <NavItem>
                        <NavLinks to = 'contact'>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contact">Get in touch</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
    );
};

export default Navbar;