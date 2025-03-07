"use client";

import { useEffect, useState } from "react";

const NavTimer = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Function to update the current time in IST
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setCurrentTime(istTime);
    };

    // Update the time immediately and set an interval to update every second
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="uppercase flex gap-2 flex-row items-center space-x-2 animate-pulse">
      <div className="badge-accent badge rounded-full aspect-square  "></div>
      <div>
        {currentTime} <span>IST</span>
      </div>
    </div>
  );
};

export default NavTimer;
