import React from "react";
import styled from "styled-components";

export const Main = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  /* background-color: ${({ theme }) => theme.primaryDark}; */
  height: 97vh;
  padding: 0;
  /* position: relative; */
  width: 100%;

  /* flex-direction: column;
    align-items: center;
    justify-content: space-evenly; */
`;
