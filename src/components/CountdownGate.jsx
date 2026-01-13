import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownGate({ onUnlock }) {
  const target = new Date();
  target.setHours(21, 55, 0, 0);

  const [time, setTime] = useState(target - new Date());

  useEffect(() => {
    const t = setInterval(() => {
      const diff = target - new Date();
      if (diff <= 0) {
        clearInterval(t);
        onUnlock();
      } else setTime(diff);
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const h = Math.floor(time / 3600000);
  const m = Math.floor((time / 60000) % 60);
  const s = Math.floor((time / 1000) % 60);

  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Something special is coming</h1>
      <div className="timer">
        {String(h).padStart(2, "0")}:{String(m).padStart(2, "0")}:
        {String(s).padStart(2, "0")}
      </div>
      <p>Wait till midnight ✨</p>
    </motion.div>
  );
}
