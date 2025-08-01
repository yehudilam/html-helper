import { format } from "date-fns";
import clsx from "clsx";

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
    className="absolute w-75 h-75 flex justify-center items-center"
    style={{ transform: `rotate(${rotation}deg)` }}
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
    className="absolute w-75 h-75"
    style={{ transform: `rotate(${element * 30}deg)` }}
  >
    {children}
  </div>
);

// Component for individual clock marks with conditional sizing
const ClockMark = ({ element }: ClockMarkProps) => (
  <div
    className={clsx(
      "mx-auto bg-black",
      element % 3 === 0 ? "h-6 w-1.5" : "h-4 w-1"
    )}
  />
);

const ClockFaceTailwind = ({ now }: ClockFaceProps) => {
  return (
    <div>
      {/* clock face */}
      <div className="w-75 h-75 rounded-full">
        {/* Clock boundary */}
        <div className="absolute w-75 h-75 border-2 border-gray-700 rounded-full" />

        {/* clock marks */}
        <div className="relative w-full">
          {/* each clock mark */}
          {clockMarksArray.map((num) => (
            <ClockMarkContainer element={num} key={`clock-mark-${num}`}>
              <ClockMark element={num} />
            </ClockMarkContainer>
          ))}

          {/* Clock hands container */}
          <div className="relative w-75 h-75">
            {/* Hour hand */}
            <HandsRect rotation={parseInt(format(now, "h"), 10) * 30}>
              <div className="h-25 w-1.75 bg-black mb-17.5" />
            </HandsRect>

            {/* Minute hand */}
            <HandsRect rotation={parseInt(format(now, "m"), 10) * 6}>
              <div className="h-35 w-1 bg-black mb-25" />
            </HandsRect>

            {/* Second hand */}
            <HandsRect rotation={parseInt(format(now, "s"), 10) * 6}>
              <div className="flex flex-col justify-center items-center mb-30">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <div className="h-36.25 w-0.75 bg-red-500" />
              </div>
            </HandsRect>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockFaceTailwind;
