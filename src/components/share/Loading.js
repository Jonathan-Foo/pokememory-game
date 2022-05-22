import React from 'react'
import styled from 'styled-components'


const Loading = ({ show }) => {
  return (
    show && (
    <LoadingWrapper>
      <Spinner/>
      <HiddenSpan >Loading...</HiddenSpan>
    </LoadingWrapper>
    )
  )
}

const LoadingWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Spinner = styled.div`
  border: 10px solid transparent;
  border-top: 10px solid ${({theme}) => theme.color.mainRed};
  border-right: 10px solid ${({theme}) => theme.color.mainRed};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`

const HiddenSpan = styled.span`
  display: none;
`

export default Loading;