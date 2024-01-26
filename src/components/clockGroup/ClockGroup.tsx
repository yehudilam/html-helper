import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ClockFace from "./clockface/Clockface";
import DigitalClock from "./digitalClock/DigitalClock";
import useGetNow from "../../hooks/useGetNow";

const ClockGroupContainer = styled.div`
  max-width: 320px;

  @media(max-width: 500px){
    max-width 100%;
  }
`;

interface ClockGroupProps {
  showDigitalClock?: boolean;
}

const ClockGroup = ({
  showDigitalClock = true
}: ClockGroupProps) => {
  const { now } = useGetNow();

  return (
    <ClockGroupContainer className="flex flex-col justify-center items-center mt-4">
      <div className="mb-4">
        <ClockFace now={now} />
      </div>
      {showDigitalClock && <DigitalClock now={now} />}
    </ClockGroupContainer>
  );
};

export default ClockGroup;
