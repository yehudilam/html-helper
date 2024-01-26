import { DateTime } from "luxon";
import { useState, useEffect } from "react";

const useGetNow = ({
  updateInterval = 1000
}: {
  updateInterval?: number,
} = {}) => {
  const [now, setNow] = useState(DateTime.now());

  const updateTime = () => {
    setNow(DateTime.now());
  }

  useEffect(() => {
    const interval = setInterval(updateTime, updateInterval);

    return () => clearInterval(interval);
  }, []);

  return { now }
};

export default useGetNow;
