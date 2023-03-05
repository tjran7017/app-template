import React, { useState } from "react";
import styled from "styled-components";

const LoadMapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LoadMap = styled.div<{ ratio: number }>`
  position: relative;
  top: 0;
  left: 0;
  width: ${(props) => 300 / props.ratio}%;
  height: ${(props) => 300 / props.ratio}%;
  transform: scale(${(props) => props.ratio});
  transform-origin: left top;
`;

function LoadMapContainer() {
  const [ratio, setRatio] = useState(1);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    setRatio((prevRatio) =>
      prevRatio >= 0.2 ? prevRatio + 0.001 * e.deltaY : 0.2
    );
  };

  return (
    <LoadMapWrapper>
      <LoadMap ratio={ratio} onWheel={handleWheel}>
        LoadMap
      </LoadMap>
    </LoadMapWrapper>
  );
}

export default LoadMapContainer;
