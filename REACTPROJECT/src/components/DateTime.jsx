import React from "react";

const DateTime = () => {
  const now = new Date();

  const weekday = now.toLocaleString("en-US", { weekday: "short" });
  const month = now.toLocaleString("en-US", { month: "short" });
  const day = now.getDate();

  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });

  const formatted = `${weekday} ${month} ${day} ${time}`.toLowerCase();

  return <div>{formatted}</div>;
};

export default DateTime;