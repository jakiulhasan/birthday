import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownGate({ onUnlock }) {
  // Set target directly in state to preserve it across renders, 10 seconds from now
  const [target] = useState(() => new Date().getTime() + 10000);
  const [time, setTime] = useState(target - new Date().getTime());

  useEffect(() => {
    const t = setInterval(() => {
      const diff = target - new Date().getTime();
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
      >
        Something special is coming
      </motion.h1>

      <div className="timer-container">
        <TimerBox value={h} label="Hours" />
        <TimerBox value={m} label="Minutes" />
        <TimerBox value={s} label="Seconds" />
      </div>

      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Wait for it... ✨
      </motion.p>
    </motion.div>
  );
}

function TimerBox({ value, label }) {
  return (
    <div className="timer-box">
      <motion.div
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="timer-val"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <span className="timer-label">{label}</span>
    </div>
  );
}
