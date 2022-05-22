import React from 'react'
import styled from 'styled-components'

const Border = () => {
  return (
    <IconBorder>
    </IconBorder>
  )
}

const IconBorder = styled.div`
    position: relative;
    background: ${({theme}) => theme.color.mainGrey};
    width: 100%;
    height: 25px;

    &::before {
        content: '';
        position: absolute;
        background: ${({theme}) => theme.color.mainWhite};
        border-radius: 50%;
        width: 35px;
        height: 35px;
        top: -5px;
        left: 49%;
        box-shadow: 
        0 0 0 5px ${({theme}) => theme.color.mainGrey},
        0 0 0 10px ${({theme}) => theme.color.mainWhite},
        0 0 0 20px ${({theme}) => theme.color.mainGrey};
        z-index: 2;
        
        @media (max-width: 750px){
            width: 30px;
            height: 30px;
            top: -2px;
            box-shadow: 
            0 0 0 5px ${({theme}) => theme.color.mainGrey},
            0 0 0 10px ${({theme}) => theme.color.mainWhite},
            0 0 0 17px ${({theme}) => theme.color.mainGrey};
        }
    }
`

export default Border;