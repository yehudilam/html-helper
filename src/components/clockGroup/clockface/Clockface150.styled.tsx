import styled from 'styled-components';

// sizes for DIMENSION = 150;
const DIMENSION = 150;

export const ClockSqure = styled.div`
  height: ${DIMENSION}px;
  width: ${DIMENSION}px;
`;

export const ClockBase = styled(ClockSqure)`
  position: absolute;
`;

export const ClockBoundary = styled(ClockBase)`
  border: 1px solid #333;
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
  height: ${props => props.element % 3 === 0 ? '12px' : '8px'};
  width: 4px;
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
  transform: rotate(${props => props.rotation ?? 0}deg);
`;

export const HourHand = styled.div`
  height: 40px;
  width: 7px;
  background-color: black;
  margin-bottom: 30px;
`;

export const MinuteHand = styled.div`
  height: 65px;
  width: 4px;
  background-color: black;
  margin-bottom: 50px;
`;

export const SecondHand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const SecondHandLong = styled.div`
  height: 65px;
  width: 2px;
  background-color: red;
`;
export const SecondHandTip = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: red;
`;
