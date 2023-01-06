import styled from "styled-components";
import ClockFace from "../components/clockface/Clockface"
import DigitalClock from "../components/digitalClock/DigitalClock";

const ClockGroup = styled.div`
  max-width: 320px;
`;

const ClockFacePage = (): JSX.Element => {
  return (
    <ClockGroup className="flex flex-col justify-center items-center">
      <div className="mb-4">
        <ClockFace />
      </div>
      <DigitalClock />
    </ClockGroup>
  );
}

export default ClockFacePage;