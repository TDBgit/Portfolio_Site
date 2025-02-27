"use client";

import { FC, useEffect, useState } from "react";
import moment from "moment-timezone";

interface LiveClockProps {
  timeZone: string;
}

const LiveClock: FC<LiveClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      setTime(moment().tz(timeZone).format("HH:mm"));
    };

    updateClock(); // Update time immediately on mount
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [timeZone]);

  return (
    <div className="flex items-center justify-center gap-[0.5vw] text-3xl text-secondary-foreground font-semibold">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw]">
          <span>{timeZone.replace("_", " ")}</span> {/* Format time zone name */}
          <span>{time}</span>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LiveClock;

