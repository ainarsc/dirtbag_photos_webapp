const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tabletS: "650px",
    tablet: "768px",
    laptopS: "1024px",
    laptopL: "1300px",
    desktop: "2560px",
  }
  
  const theme = {
    primaryDark: "rgb(28, 28, 28)",
    primaryLight: "#F7F7F9",
    primaryHover: "rgba(0, 0, 0, 0.5)",
    secondaryHover: "#242424",
    transparant: "rgba(5, 5, 5, 0.3)",
    themeColors: {
      main: "#db5f00",
      secondary: "#ffac38",
      alternative: "#db5f00"
    },
    
    //"linear-gradient(to right, #db5f00, #ffac38, #db5f00)",
    // main: "linear-gradient(to right, #158a28, #14a76c, #158a28)",
    secondaryDark: "rgb(40, 40, 40)",
    secondaryLight: "rgba(230, 230, 230, 0.4)",
    secondaryLighter: "rgba(230, 230, 230, 0.8)",
    footerMain: "linear-gradient(to right, #262626, #383838, #262626)",
  
    mobileS: `min-width: ${size.mobileS}`,
    mobileM: `min-width: ${size.mobileM}`,
    mobileL: `min-width: ${size.mobileL}`,
    tabletS: `min-width: ${size.tabletS}`,
    tablet: `min-width: ${size.tablet}`,
    laptopS: `min-width: ${size.laptopS}`,
    laptopL: `min-width: ${size.laptopL}`,
    desktop: `min-width: ${size.desktop}`,
    desktopL: `min-width: ${size.desktop}`,
  }
  
  export default theme