import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
 
 export default SideBar => {

    //Link names
    const NAV_LINK_NAME_1 = 'Home',
    NAV_LINK_NAME_2 = 'Portfolio',
    NAV_LINK_NAME_3 = 'About',
    NAV_LINK_NAME_4 = 'Contact',
    //Links
    LINK_1 = '/',
    LINK_2 = '/portfolio',
    LINK_3 = '/about',
    LINK_4 = '/contact'

     return (
         <Menu>
             <StyledList>
                <ListItem>
                    <StyledLink exact activeClassName="active" to={LINK_1}>{NAV_LINK_NAME_1}</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink activeClassName="active" to={LINK_2}>{NAV_LINK_NAME_2}</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink activeClassName="active" to={LINK_3}>{NAV_LINK_NAME_3}</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink activeClassName="active" to={LINK_4}>{NAV_LINK_NAME_4}</StyledLink>
                </ListItem>
             </StyledList>
         </Menu>
     )
 }

 const Menu = styled.div`
    background: rgba(15, 15, 15, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    z-index: 98;

 `

const StyledList = styled.ul`
    padding: 0;
    margin-top: 5rem;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    list-style: none; 
`

const ListItem = styled.li`
    & a {
        font-family: 'Zen Tokyo Zoo', cursive;
        color: #dfe6e9;
        text-transform: uppercase;
        font-weight: 300;
        margin: 0 1rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;
        &.active {
        color: ${({ theme }) => theme.themeColors.alternative}};
    }
`
const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.themeColors.alternative};
    text-decoration: none;
    font-weight: 600;
    padding: 5px;
    width: 100%;
    &:hover {
      color: ${({ theme }) => theme.themeColors.alternative};
    }
`
 