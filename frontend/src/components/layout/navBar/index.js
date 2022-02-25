import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "./menuIcon";
import SideBar from "./menu";

export default () => {
  //Sidebar state
  const [isVisible, setVisibility] = useState(false);
  //Brand section
  const BRAND = "ainars ciesa photography";

  return (
    <Wrapper>
      <Brand>{BRAND}</Brand>
      <MenuIcon isVisible={isVisible} handleVisibility={setVisibility} />
      {isVisible && <SideBar isVisible={[isVisible, setVisibility]} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 6vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 90;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  flex: 1;
  color: ${({ theme }) => theme.primaryLight};
  font-family: "Poiret One", cursive;
  letter-spacing: 1.6px;
  font-size: 35px;
`;
