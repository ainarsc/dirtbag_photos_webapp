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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  filter: blur(5px);
`;

const PhotoView = styled.div`
  width: 100px;
  height: 250px;
  background-color: green;
`;

const ButtonRight = styled.div``;
const ButtonLeft = styled.div``;
const Close = styled.div``;
