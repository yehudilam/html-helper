import { useState, useEffect } from "react";

const useGetNow = ({
  updateInterval = 1000,
}: {
  updateInterval?: number;
} = {}) => {
  const [now, setNow] = useState(new Date());

  const updateTime = () => {
    setNow(new Date());
  };

  useEffect(() => {
    const interval = setInterval(updateTime, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval]);

  return { now };
};

export default useGetNow;
