import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [now, setNow] = useState(DateTime.now());

  const updateTime = () => {
    setNow(DateTime.now());
  }

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-bold">{now.toFormat('HH:mm:ss')}</div>
  );
};

export default DigitalClock;
