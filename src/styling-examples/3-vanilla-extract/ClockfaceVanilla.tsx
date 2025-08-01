import { format } from "date-fns";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import * as styles from "./ClockfaceVanilla.css";

const clockMarksArray = Array.from({ length: 12 }, (_, i) => i + 1);

interface ClockMarkProps {
  element: number;
}

interface HandsProps {
  rotation?: number;
  children: React.ReactNode;
}

interface ClockFaceProps {
  now: Date;
}

// Component to handle dynamic rotation
const HandsRect = ({ rotation = 0, children }: HandsProps) => (
  <div
    className={styles.handsRect}
    style={assignInlineVars({
      [styles.rotationVar]: `${rotation}deg`,
    })}
  >
    {children}
  </div>
);

// Component for clock marks with dynamic positioning
const ClockMarkContainer = ({
  element,
  children,
}: {
  element: number;
  children: React.ReactNode;
}) => (
  <div
    className={styles.clockMarkContainer}
    style={assignInlineVars({
      [styles.elementVar]: element.toString(),
    })}
  >
    {children}
  </div>
);

// Component for individual clock marks with conditional sizing
const ClockMark = ({ element }: ClockMarkProps) => (
  <div
    className={clsx(
      element % 3 === 0 ? styles.clockMarkLarge : styles.clockMarkSmall
    )}
  />
);

const ClockFaceVanilla = ({ now }: ClockFaceProps) => {
  return (
    <div>
      {/* clock face */}
      <div className={styles.clockFaceBackground}>
        <div className={styles.clockBoundary} />

        {/* clock marks */}
        <div className={styles.clockMarks}>
          {/* each clock mark */}
          {clockMarksArray.map((num) => (
            <ClockMarkContainer element={num} key={`clock-mark-${num}`}>
              <ClockMark element={num} />
            </ClockMarkContainer>
          ))}

          <div className={styles.clockHands}>
            <HandsRect rotation={parseInt(format(now, "h"), 10) * 30}>
              <div className={styles.hourHand} />
            </HandsRect>

            <HandsRect rotation={parseInt(format(now, "m"), 10) * 6}>
              <div className={styles.minuteHand} />
            </HandsRect>

            <HandsRect rotation={parseInt(format(now, "s"), 10) * 6}>
              <div className={styles.secondHand}>
                <div className={styles.secondHandTip} />
                <div className={styles.secondHandLong} />
              </div>
            </HandsRect>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockFaceVanilla;
