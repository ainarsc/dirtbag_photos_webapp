import React, { useState, useEffect } from "react";
import styled from "styled-components";

//TODO
//Build mock up (no data)
//Index photos
//Pass data
//Event listiners
//Style
//Current state
//Track photo index
//Calculate next photo index

export default function Lightbox() {
  const [showModal, setModal] = useState(false);

  return (
    <Background>
      <PhotoView>FOO</PhotoView>
    </Background>
  );
}

// CSS
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.5);
  backdrop-filter: blur(10px);
`;

const PhotoView = styled.div`
  width: 100px;
  height: 250px;
  background-color: green;
  filter: blur(0px);
`;

const ButtonRight = styled.div``;
const ButtonLeft = styled.div``;
const Close = styled.div``;
