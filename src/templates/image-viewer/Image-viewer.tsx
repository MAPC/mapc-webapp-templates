import React, { useRef, useState, useEffect } from "react";
// @ts-ignore
import { Footer } from "mapc-design-system";
import { TransformWrapper, TransformComponent, ReactZoomPanPinchHandlers } from "react-zoom-pan-pinch";
import { FileEarmarkArrowDown, ZoomIn, ZoomOut, XLg } from "react-bootstrap-icons";

import styled from "styled-components";

const Nav = styled.div`
  background-color: ${(props) => (props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "#efefe7")};
  color: ${(props) =>
    props.theme.tertiaryColor !== undefined
      ? props.theme.tertiaryColor
      : props.theme.primaryColor !== undefined
      ? props.theme.primaryColor
      : "#00332d"};
  height: 3.25rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Title = styled.div`
  color: ${(props) => (props.theme.primaryColor !== undefined ? props.theme.primaryColor : "#00332d")};
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  padding-left: 1rem;
  fontsize: 42px;
`;

const NavButton = styled.div`
  float: right;
  padding: 0.75rem;
  margin-right: 0.25rem;
  background-color: ${(props) => (props.theme.primaryColor !== undefined ? props.theme.primaryColor : "#efefe7")};
  font-size: large;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.theme.secondaryColor !== undefined ? props.theme.secondaryColor : "#dddcd1")};
  }
`;

const MainImage = styled.img`
  width: 100vw;
  height: calc(100vh - 3.25rem - 8rem);
  object-fit: "contain";

  /* display: block; */
  width: auto;
  height: auto;

  overflow-x: hidden;
  overflow-y: hidden;
`;

const ImageDiv = styled.div`
  width: 100vw;
  backgroundcolor: theme?.backgroundColor;
  overflow: "hidden";
`;

interface theme {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

interface props {
  image: string;
  title?: React.ReactNode | string;
  alt?: string;
  file?: string;
  theme?: theme;
}

function ImageViewer({ image, title, alt, file, theme }: props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth / 2);
  const updateDimensions = () => {
    setWindowWidth(window.innerWidth / 2);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const transformComponentRef = useRef(null);
  console.log(windowWidth);

  const Controls = ({ zoomIn, zoomOut, resetTransform }: ReactZoomPanPinchHandlers) => (
    <Nav theme={theme}>
      <Title theme={theme}>{title}</Title>
      <NavButton theme={theme}>
        <a href={file !== undefined ? file : image} download style={{ color: theme?.tertiaryColor }}>
          <FileEarmarkArrowDown />
        </a>
      </NavButton>
      <NavButton onClick={() => resetTransform()} theme={theme}>
        <XLg />
      </NavButton>
      <NavButton onClick={() => zoomOut()} theme={theme}>
        <ZoomOut />
      </NavButton>
      <NavButton onClick={() => zoomIn()} theme={theme}>
        <ZoomIn />
      </NavButton>
    </Nav>
  );

  return (
    <div
      style={{
        width: "100vw",
        // height: "calc(100vh - 3.25rem - 1rem)",
        backgroundColor: theme?.backgroundColor,
        // overflow: "hidden",
      }}
    >
      <ImageDiv>
        <TransformWrapper initialScale={1} initialPositionX={windowWidth / 2} ref={transformComponentRef}>
          {(utils) => (
            <React.Fragment>
              <Controls {...utils} />
              <TransformComponent wrapperStyle={{ width: "100vw", maxHeight: "calc(100vh - 3.25rem - 8rem)" }}>
                <MainImage src={image} alt={alt !== undefined ? alt : ""} />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </ImageDiv>

      <Footer style={{ marginTop: "1rem", backgroundColor: theme?.tertiaryColor }} />
    </div>
  );
}

export default ImageViewer;
