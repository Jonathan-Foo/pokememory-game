import React from 'react';
import styled from 'styled-components';
import logo from '../assests/PoKeMoMeRy GaMe.png'


const Header = () => {
  return (
    <HeaderWrapper >
    <Logo src={logo} alt="Pokememory Game" />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.color.mainRed};
    padding: 1.5em;
`

const Logo = styled.img`
    width: 700px;

    @media (max-width: 750px) {
        width: 450px;
    }
`

export default Header;
