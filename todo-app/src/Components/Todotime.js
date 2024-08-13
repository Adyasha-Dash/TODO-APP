import React, { useState, useEffect } from "react";
import "../Components/Todo.css";

export default function Todotime() {
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDatetime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="date-time">{datetime}</h1>
  );
}
