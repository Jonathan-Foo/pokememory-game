import styled from 'styled-components';
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterWrapper>
        <p className="copyright">Copyright© 2022 JonathanFoo</p>
        <GitLink href="https://github.com/Jonathan-Foo" target="_blank">
            <FaGithub size={17}/>
        </GitLink>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.color.mainGrey};
    color: ${({theme}) => theme.color.mainWhite};
    padding: .5em;
    font-size: .8em;
    gap: .5em;
    
`

const GitLink = styled.a`
    color: ${({theme}) => theme.color.mainWhite};
    
`

export default Footer;
