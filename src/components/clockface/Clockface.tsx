import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const DIMENSION = 150;

const ClockSqure = styled.div`
  height: ${DIMENSION}px;
  width: ${DIMENSION}px;
`;

const ClockBase = styled(ClockSqure)`
  position: absolute;
`;

const ClockBoundary = styled(ClockBase)`
  border: 1px solid #333;
  border-radius: 100%;
`;

const ClockFaceBackground = styled(ClockSqure)`
  border-radius: 100%;
`;

const ClockMarks = styled.div`
  position: relative;
  width: 100%;
`;

const ClockMarkContainer = styled(ClockBase)<ClockMarkProps>`
  transform: rotate(${(props) => props.element * 30}deg);
`;

interface ClockMarkProps {
  element: number;
}

const ClockMark = styled.div<ClockMarkProps>`
  height: ${props => props.element % 3 === 0 ? '12px' : '8px'};
  width: 4px;
  margin: auto;
  background-color: black;
`;

const ClockHands = styled(ClockSqure)`
  position: relative;
`;

interface HandsReact {
  rotation?: number;
}

const HandsRect = styled(ClockBase)<HandsReact>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${props => props.rotation ?? 0}deg);
`;

const HourHand = styled.div`
  height: 40px;
  width: 7px;
  background-color: black;
  margin-bottom: 30px;
`;

const MinuteHand = styled.div`
  height: 65px;
  width: 4px;
  background-color: black;
  margin-bottom: 50px;
`;

const SecondHand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const SecondHandLong = styled.div`
  height: 65px;
  width: 2px;
  background-color: red;
`;
const SecondHandTip = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: red;
`;

const clockMarksArray = Array.from({ length: 12 }, (_, i) => i + 1);

const ClockFace = () => {
  const [now, setNow] = useState(DateTime.now());

  const updateTime = () => {
    setNow(DateTime.now());
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* clock face */}
      <ClockFaceBackground>

        <ClockBoundary />

        {/* clock marks */}
        <ClockMarks>

          {/* each clock mark */}
          {clockMarksArray.map(num => (
            <ClockMarkContainer element={num} key={`clock-mark-${num}`}>
              <ClockMark element={num} />
            </ClockMarkContainer>
          ))}

          <ClockHands>
            <HandsRect rotation={parseInt(now.toFormat("h"), 10) * 30}>
              <HourHand />
            </HandsRect>

            <HandsRect rotation={parseInt(now.toFormat("m"), 10) * 6}>
              <MinuteHand />
            </HandsRect>

            <HandsRect rotation={parseInt(now.toFormat("s"), 10) * 6}>
              <SecondHand>
                <SecondHandTip />
                <SecondHandLong />
              </SecondHand>
            </HandsRect>

          </ClockHands>
        </ClockMarks>
      </ClockFaceBackground>


    </div>
  )
};

export default ClockFace;
