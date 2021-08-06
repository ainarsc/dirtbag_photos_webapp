import React, {useState} from 'react'
import styled from 'styled-components'

export default function MenuIcon({isVisible, handleVisibility}) {
    return (
        <Wrapper>
            <Icon onClick={() => handleVisibility(!isVisible)}>
                <TopLine className={isVisible && "open"}/>
                <TopMiddleLine className={isVisible && "open"}/>
                <BottomMiddleLine className={isVisible && "open"}/>
                <BottomLine className={isVisible && "open"}/>
            </Icon>
        </Wrapper>
       
    )
}


const Wrapper = styled.div`
    margin: 0;
    padding: 0; 
    flex: 1;
    display: flex;
    justify-content: flex-end;
    z-index: 99;
`
const Icon = styled.div`
    /* position: absolute; */
    /* right: 2rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 2rem;

`
const Line = styled.span`
    top: 0px;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: #f7f7f9;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
`

const TopLine = styled(Line)`
    &.open {
        top: 10px;
        width: 0%;
    }
`
const TopMiddleLine = styled(Line)`
    &.open {
        top: -10px;
        width: 2.6rem;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`
const BottomMiddleLine = styled(Line)`
    &.open {
        top: 10px;
        width: 2.6rem;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
`
const BottomLine = styled(Line)`
    &.open {
        top: -10px;
        width: 0%;
    }
`