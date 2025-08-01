import styled from "styled-components";

// sizes for DIMENSION = 300;
const DIMENSION = 300;

export const ClockSqure = styled.div`
  height: ${DIMENSION}px;
  width: ${DIMENSION}px;
`;

export const ClockBase = styled(ClockSqure)`
  position: absolute;
`;

export const ClockBoundary = styled(ClockBase)`
  border: 2px solid #333;
  border-radius: 100%;
`;

export const ClockFaceBackground = styled(ClockSqure)`
  border-radius: 100%;
`;

export const ClockMarks = styled.div`
  position: relative;
  width: 100%;
`;

export const ClockMarkContainer = styled(ClockBase)<ClockMarkProps>`
  transform: rotate(${(props) => props.element * 30}deg);
`;

interface ClockMarkProps {
  element: number;
}

export const ClockMark = styled.div<ClockMarkProps>`
  height: ${(props) => (props.element % 3 === 0 ? "24px" : "16px")};
  width: ${(props) => (props.element % 3 === 0 ? "6px" : "4px")};
  margin: auto;
  background-color: black;
`;

export const ClockHands = styled(ClockSqure)`
  position: relative;
`;

interface HandsReact {
  rotation?: number;
}

export const HandsRect = styled(ClockBase)<HandsReact>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${(props) => props.rotation ?? 0}deg);
`;

export const HourHand = styled.div`
  height: 100px;
  width: 7px;
  background-color: black;
  margin-bottom: 70px;
`;

export const MinuteHand = styled.div`
  height: 140px;
  width: 4px;
  background-color: black;
  margin-bottom: 100px;
`;

export const SecondHand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`;

export const SecondHandLong = styled.div`
  height: 145px;
  width: 3px;
  background-color: red;
`;

export const SecondHandTip = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: red;
`;
