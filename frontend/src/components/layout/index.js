
import React from "react"
import GlobalStyles from "./globalStyles"
import {ThemeProvider} from 'styled-components';
import PropTypes from "prop-types"
import NavBar from "./navBar"
import Footer from "./footer"
import {Main} from './main';
import theme from './theme'



const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyles theme={theme}/>
    <ThemeProvider theme={theme}>
    <NavBar />
      <Main>
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout