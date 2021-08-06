import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <div><Text>COPYRIGHT 2021</Text></div>
            <div><Text>ABOUT</Text></div>
            <div><Text>DEVELOPED BY AINARS CIESA</Text></div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.primaryDark};
    height: 3vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
`
const Text = styled.p`
    font-size: 11px;
    color: ${(theme) => theme.secondaryLight};
`

export default Footer;