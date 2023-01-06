import { DateTime } from "luxon";

interface DigitalClockProps {
  now: DateTime
}

const DigitalClock = ({ now }: DigitalClockProps) => {
  return (
    <div className="text-2xl font-bold">{now.toFormat('HH:mm:ss')}</div>
  );
};

export default DigitalClock;
