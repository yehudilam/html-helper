import { format } from "date-fns";
import {
  ClockSqure,
  ClockBase,
  ClockBoundary,
  ClockFaceBackground,
  ClockMarks,
  ClockMarkContainer,
  ClockMark,
  ClockHands,
  HandsRect,
  HourHand,
  MinuteHand,
  SecondHand,
  SecondHandLong,
  SecondHandTip,
} from "./ClockfaceStyled.styled";

const clockMarksArray = Array.from({ length: 12 }, (_, i) => i + 1);

interface ClockFaceProps {
  now: Date;
}

const ClockFaceStyled = ({ now }: ClockFaceProps) => {
  return (
    <div>
      {/* clock face */}
      <ClockFaceBackground>
        <ClockBoundary />

        {/* clock marks */}
        <ClockMarks>
          {/* each clock mark */}
          {clockMarksArray.map((num) => (
            <ClockMarkContainer element={num} key={`clock-mark-${num}`}>
              <ClockMark element={num} />
            </ClockMarkContainer>
          ))}

          <ClockHands>
            <HandsRect rotation={parseInt(format(now, "h"), 10) * 30}>
              <HourHand />
            </HandsRect>

            <HandsRect rotation={parseInt(format(now, "m"), 10) * 6}>
              <MinuteHand />
            </HandsRect>

            <HandsRect rotation={parseInt(format(now, "s"), 10) * 6}>
              <SecondHand>
                <SecondHandTip />
                <SecondHandLong />
              </SecondHand>
            </HandsRect>
          </ClockHands>
        </ClockMarks>
      </ClockFaceBackground>
    </div>
  );
};

export default ClockFaceStyled;
