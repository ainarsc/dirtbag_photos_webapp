import React from 'react';
import styled from 'styled-components';


export const Main = ({ children }) => {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    /* background-color: ${({theme}) => theme.primaryDark}; */
    height: 97vh;
    /* position: relative; */
    width: 100%;
    overflow: scroll;
    /* flex-direction: column;
    align-items: center;
    justify-content: space-evenly; */
`
